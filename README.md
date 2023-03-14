## Sobre o Projeto

- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter um resume da sua conta;
- [x] O usuário deve poder listar todas as transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única;

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito que subtrairá;
- [x] Deve ser possível identificarmos o usuário entre as requisições;
- [x] O usuário só pode visualizar transações da qual ele criou;

### Tecnologias Usadas

- [Fastify](https://www.fastify.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Knex](https://knexjs.org/)
- [Vitest](https://vitest.dev/)
- [Render](https://render.com/)

### Como rodar a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/marrcelosantana/api-restful-node
# Acesse a pasta do projeto
$ cd market-space-app
# Instale as dependências
$ npm install
# ou
$ yarn
# Instale as migrations
$ npm run knex -- migrate:latest
# Rode a aplicação em desenvolvimento
$ npm run dev
# Rode a aplicação de testes
$ npm run test
# Build
$ npm run build


```
