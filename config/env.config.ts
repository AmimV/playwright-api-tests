// Centraliza configurações do ambiente de execução.

export const API_URL = process.env.API_URL || 'https://dummyjson.com';

export const DEFAULT_TIMEOUT = Number(process.env.TIMEOUT) || 5000;
