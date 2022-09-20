## Olá seja bem-vindo(a) ao desafio prático da [bis2bis e-commerce](https://www.bis2bis.com.br/?gclid=CjwKCAjwpqCZBhAbEiwAa7pXecZ_YtMyQvzmpPUOxoaJ3j10yxF6FGjzNk6c9avdFt3JUPCymZEOhxoCLBgQAvD_BwE) :rocket:


O objetivo desse projeto consiste em varrer uma API que retorna as universidades contidas em uma lista fornecida e salvar em um banco de dados!

O desafio proposto faz parte do desafio técnico da bis2bis e-commerce. Vem comigo que este projeto ficou da hora :alarm_clock:

## Estrutura

Procurei implementar a arquitetura **`MSC`** na API, pensando em escalabilidade e organização.

**`MSC`** - MODEL, SERVICES e CONTROLLERS

- #### API

1. Pasta Controllers se dedica apenas para receber requisições e repassar para camada de services, receber sua resposta e repassar para rota da aplicação.

2. Pasta routers contém as rotas da aplicação.

3. Pasta services se dedica a receber requisiçoes da camada de controllers, aplicar regras
de negócio e a lógica necessária e devolver uma resposta ao controllers.

4. Pasta Schemas é uma abtração para a camada de Model, se dedica em criar um modelo de collection para o MongoDB.

5. Pasta HttpCatalog, aqui contém funções para o tratamento de respostas para o usuário.

6. pasta requestApi, se dedica apenas em fazer uma requisição para API de terceiros possibilitando a integração.

7. pasta utils, contém uma função para formatação dos dados.

## Tecnologias utilizadas

- Linguagens:
    - NodeJs
- ORM(Object/Relational Mapper): 
    - Sequelize
- Autenticação:
    - JWT
- Configurações / variáveis de ambiente
    - Dotenv
- docker-compose:
    - image: mongo:5.0.7
    - image: Node:16.14
- Organização e Padronização de codigo:
    - Eslint / config-airbnb-base
- Facilitador de desenvolvimento:
    - nodemon
- framework's:
    - Express
- Testes:
    - mocha
    - chai
    - sinon

## Começando

- Rode o comando **docker-compose up -d**

## Outros comandos

- `"dev": "nodemon ."` inicia o projeto com nodemon.
- `"test": "mocha src/test/**/*.test.js --exit"` Executa os testes.

### Vou ficando por aqui, muito obrigado pela atenção e até breve!
