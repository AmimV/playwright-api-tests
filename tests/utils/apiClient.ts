import { request, APIRequestContext, APIResponse } from '@playwright/test';
import { API_URL } from '../../config/env.config';

export class ApiClient {
  private requestContext!: APIRequestContext;
  private token?: string;

  /**
   * Inicializa o contexto de requisições do Playwright.
   * Este método deve ser chamado no beforeAll() dos testes.
   */
  async init() {
    this.requestContext = await request.newContext({
      baseURL: API_URL,
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Define o token de autenticação (quando necessário).
   */
  setAuthToken(token: string) {
    this.token = token;
  }

  /**
   * Monta os headers padrão para as requisições.
   */
  private getHeaders(): Record<string, string> {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    return headers;
  }

  /**
   * Executa uma requisição GET.
   */
  async get(endpoint: string): Promise<APIResponse> {
    const response = await this.requestContext.get(endpoint, {
      headers: this.getHeaders(),
    });
    return response;
  }

  /**
   * Executa uma requisição POST.
   */
  async post(endpoint: string, payload: object): Promise<APIResponse> {
    const response = await this.requestContext.post(endpoint, {
      data: payload,
      headers: this.getHeaders(),
    });
    return response;
  }

  /**
   * Executa uma requisição PUT.
   */
  async put(endpoint: string, payload: object): Promise<APIResponse> {
    const response = await this.requestContext.put(endpoint, {
      data: payload,
      headers: this.getHeaders(),
    });
    return response;
  }

  /**
   * Executa uma requisição DELETE.
   */
  async delete(endpoint: string): Promise<APIResponse> {
    const response = await this.requestContext.delete(endpoint, {
      headers: this.getHeaders(),
    });
    return response;
  }

  /**
   * Fecha o contexto de requisições.
   */
  async close() {
    await this.requestContext.dispose();
  }
}
