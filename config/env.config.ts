/**
 * Environment configuration for API tests
 * ---------------------------------------
 * Centraliza as configurações do ambiente de execução dos testes.
 * Este arquivo será o ponto único de mudança para URLs, tokens ou
 * parâmetros globais no futuro.
 */

export const API_URL = process.env.API_URL || 'https://dummyjson.com';
