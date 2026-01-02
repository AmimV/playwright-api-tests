//Define a estrutura esperada para os dados de usuário usados nos testes.

export interface User {
  username: string;
  password: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
}
