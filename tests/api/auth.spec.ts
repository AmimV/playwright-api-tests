import { test, expect } from '@playwright/test';
import { ApiClient } from '../utils/apiClient';
import { User } from '../../types/user';
import users from '../../data/users.json';

test.describe('Authentication API', () => {
  let apiClient: ApiClient;
  let authToken: string;

  // Inicializa o cliente antes de todos os testes
  test.beforeAll(async () => {
    apiClient = new ApiClient();
    await apiClient.init();
  });

  // Fecha o contexto após todos os testes
  test.afterAll(async () => {
    await apiClient.close();
  });

  test('should successfully authenticate and return a valid token', async () => {
    const payload: User = users.validUser;

    const response = await apiClient.post('/auth/login', payload);
    expect(response.status()).toBe(200);

    const body = await response.json();

    // Validações de payload
    expect(body).toHaveProperty('accessToken');
    expect(body.accessToken).toBeTruthy();
    expect(body.username).toBe(payload.username);
    expect(body.email).toBe(payload.email);
    expect(body.firstName).toBe(payload.firstName);
    expect(body.lastName).toBe(payload.lastName);
    expect(body.gender).toBe(payload.gender);

    // Armazena o token para reuso
    authToken = body.accessToken;
    apiClient.setAuthToken(authToken);
  });

  // Caso de teste: login inválido deve retornar erro 400
  test('should fail to authenticate with invalid credentials', async () => {
    const invalidPayload = {
      username: users.invalidUser.username,
      password: users.invalidUser.password,
    };

    const response = await apiClient.post('/auth/login', invalidPayload);
    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body).toHaveProperty('message');
    expect(body.message).toContain('Invalid credentials');
  });
});
