# Projeto de Rest com Fastify
# npm init -y
# npm i fastify
# npm i -D typescript @types/node
/---------------------------------------
# -->| Configuração do  TypeScript |<--
# npx tsc --init

/-----------
site --> https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping
# mudar o target de acordo com a versão que se esta usando.

## ---> Instalando uma dependencia ---------->
https://www.npmjs.com/package/tsx
esse aqui converte o arquivo ts em js
# npm install --save-dev tsx
depos configuramos no packgjson o arquivo script ( "dev": "tsx src/server.ts",)

/----------------
Configuração do Eslint
https://github.com/Rocketseat/eslint-config-rocketseat
# npm i -D eslint @rocketseat/eslint-config
  confi no packgjson:
  # --> "lint": "eslint --ext .ts src --fix"

  #  npm run lint ---->
.eslintrc.json
{
  "extends": "@rocketseat/eslint-config/node"
}
### --> Bancos Relacionais -- Bora Estudar!
https://knexjs.org/
Usaremos: --> SqLite: Knex.js <--
# npm install knex
# npm install sqlite3
/--------Para testar o conexão--/
app.get('/hello', async () => {
#  const tables = await knex('sqlite_schema').select('*') importante

  return tables
})
/-----------
https://knexjs.org/guide/migrations.html#migration-cli
# --> Trabalhando a Migrations Knex
# npx knex --help 
# confi no script

## Migrations: 
# -->  npm run knex -- migrate:make create-documents
# --> npm run knex -- migrate:latest criate tables 
# --> npm run knex -- migrate:rollback para atualizar as tables 
# --> npm run knex -- migrate:make add-session-id-to-transactions adiciona session-id na tabela transactios
# npm run knex -- migrate:latest  sempre executamos latest para criar

 -->  "knex": "node --no-warnings --import tsx ./node_modules/knex/bin/cli.js",

//------ CONFIGURAÇAO DE ARQUIVO knexfile.js ---<>
knexfile.js
Para usar a migration precisamos realizar algumas configurações 
no arquivo da conexão

# Vamos entender um pouco como fazer querys simples de inserção e busca de dados.||


//-
https://www.npmjs.com/package/dotenv
 # npm i dotenv para trabalhar com arquivos .env

 // --Biblioteca de BALIDAÇÃO  || https://zod.dev/?id=installation
 # npm install zod
 # // ->>> Requisitos Funcionais.

  # RF
    - [X] O usuário deve poder criar uma nova transação;
    - [X] O usuário deve poder obter um resumo da sua conta;
    - [X] O usuário deve poder listar todas transações que já ocorreram;
    - [X] O usuário deve poder visualizar uma transação única;

  # RN
    - [X] A transação pode ser do tipo crédito que somará ao valor total, ou debito subtrairá;
    - [ ] Deve ser possivel identificarmos o usuário entre as requisições;
    - [ ] O usuário só pode visualizar transações o quel ele criou;

  # RNF
    - [ ] 

    /--
    # --->Trabalhando com Cookies
   # https://github.com/fastify/fastify-cookie
   # npm i @fastify/cookie

   # Cookies <-> Formas das gente se manter contexto entre as requisições
  
   ---------
    #  Trabalhando com Prehandler =  Middelewars: 
  # https://fastify.dev/docs/latest/Reference/Hooks/#prehandler

      /------------------------------------------------
 # Trabalhando com test AUTOMATIZADOS...
     
  #  --> https://vitest.dev

  # npm install -D vitest

  https://www.npmjs.com/package/supertest
  --> library --> Supertest
 # npm i supertest -D
 # npm install --save @types/supertest
 *---------- -----
 Para fazer --> Build
 # https://www.npmjs.com/package/tsup
 # npm i tsup -D
    "build": "tsup src --out-dir build",
 # --> npm run build  ==> para fazer do projeto
 # executar esse comando --> |  node build\server.js para ver se esta funcionando