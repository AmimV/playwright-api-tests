import { test, expect } from '@playwright/test';
import { ApiClient } from '../utils/apiClient';
import users from '../../data/users.json';
import { User } from '../../types/user';

test.describe('Users API', () => {
  let apiClient: ApiClient;
  let authToken: string;

  test.beforeAll(async () => {
    apiClient = new ApiClient();
    await apiClient.init();

    const payload: User = users.validUser;
    const loginResponse = await apiClient.post('/auth/login', payload);

    expect(loginResponse.status()).toBe(200);

    const loginBody = await loginResponse.json();
    authToken = loginBody.accessToken;
    apiClient.setAuthToken(authToken);
  });

  test.afterAll(async () => {
    await apiClient.close();
  });

  test('should retrieve a list of users successfully', async () => {
    const response = await apiClient.get('/users');
    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toHaveProperty('users');
    expect(Array.isArray(body.users)).toBeTruthy();
    expect(body.users.length).toBeGreaterThan(0);

    const firstUser = body.users[0];
    expect(firstUser).toHaveProperty('id');
    expect(firstUser).toHaveProperty('firstName');
    expect(firstUser).toHaveProperty('email');
    expect(firstUser.firstName).toBe(users.validUser.firstName);
  });

  test('should retrieve a specific user by ID', async () => {
    const userId = 1;
    const response = await apiClient.get(`/users/${userId}`);
    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(userId);
    expect(body).toHaveProperty('firstName');
    expect(body).toHaveProperty('email');
    expect(typeof body.email).toBe('string');
  });

  test('should return 404 when retrieving a non-existent user', async () => {
    const invalidId = 9999;
    const response = await apiClient.get(`/users/${invalidId}`);
    expect(response.status()).toBe(404);

    const body = await response.json();
    expect(body).toHaveProperty('message');
    expect(body.message).toContain('User with id');
  });
});
