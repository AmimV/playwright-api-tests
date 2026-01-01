# Playwright – Automação de Testes de API

## 📌 Visão Geral

Este projeto tem como objetivo demonstrar uma **estratégia sólida de automação de testes de API** utilizando **Playwright**, com foco em **qualidade, organização, manutenção e escalabilidade**.

O repositório simula um cenário real de validação de APIs REST, contemplando autenticação, validação de regras de negócio, reutilização de código e separação clara de responsabilidades.

---

## 🎯 Objetivos do Projeto

- Automatizar testes funcionais de APIs REST
- Garantir cobertura de endpoints críticos
- Facilitar a manutenção frente a mudanças frequentes na API
- Demonstrar boas práticas de automação para QA
- Servir como base reutilizável para novos projetos

---

## 🧪 Tipos de Testes Implementados

- Testes funcionais de API  
- Testes de contrato (validação de status code, schema e payload)  
- Testes de autenticação  
- Testes de regressão automatizados  
- Validação de dados de resposta  

---

## 🛠️ Tecnologias Utilizadas

- Playwright  
- TypeScript  
- Node.js  
- API REST  
- JSON para dados de teste  

---

## 📂 Estrutura do Projeto

```
playwright-api-validation/
│
├── tests/
│ ├── api/
│ │ ├── auth.spec.ts # Testes relacionados à autenticação
│ │ ├── users.spec.ts # Testes de endpoints de usuários
│ │ └── products.spec.ts # Testes de endpoints de produtos
│ │
│ ├── utils/
│ │ └── apiClient.ts # Cliente HTTP reutilizável
│ │
│ └── test-setup.ts # Configurações globais de testes
│
├── config/
│ ├── playwright.config.ts # Configurações do Playwright
│ └── env.config.ts # Configurações de ambiente
│
├── data/
│ ├── users.json # Massa de dados para testes
│ └── testData.json
│
├── reports/ # Relatórios gerados automaticamente
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🧱 Estratégia de Automação

- **Separação por domínio**: testes organizados por contexto de negócio (auth, users, products)
- **Reutilização de código**: cliente HTTP centralizado (`apiClient.ts`)
- **Dados desacoplados**: massas de teste em arquivos JSON
- **Baixo acoplamento**: mudanças em endpoints impactam o mínimo possível de testes
- **Foco em legibilidade e manutenção**

---

## ▶️ Como Executar o Projeto

### Pré-requisitos
- Node.js instalado
- NPM ou Yarn

### Instalação
```npm install```

### Execução dos testes
```npx playwright test```


### Execução com relatório
```npx playwright test```


---

## 📊 Relatórios

Os relatórios são gerados automaticamente pelo Playwright e armazenados na pasta `reports/`, permitindo análise rápida de falhas, evidências e histórico de execuções.

---

## 🔍 Boas Práticas Aplicadas

- Nomes de testes descritivos
- Código limpo e reutilizável
- Evita hardcode de dados sensíveis
- Estrutura preparada para CI/CD
- Pensamento orientado à manutenção

---

## 🚀 Próximos Passos (Evolução do Projeto)

- Integração com pipeline CI/CD
- Execução paralela de testes
- Validação de schema com JSON Schema
- Testes de performance básicos
- Mock de serviços externos

---

## 👤 Autor

**Matheus**  
QA com experiência em testes manuais e automatizados, APIs, regras de negócio e qualidade de software em ambientes ágeis.