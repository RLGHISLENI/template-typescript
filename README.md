# Template Typescript

Template básico para criação de projeto em typscript.

## Instruções para executar o projeto

Execute o comando `yarn` para baixar as dependências e depois utilize `yarn dev` para executar o projeto.

Abra o browser na url [http:\\localhost:3000](http:\localhost:3000) e veja o projeto em execução.

## Passo a passo para criação do projeto

Crie uma nova pasta para o projeto.

```zsh
$ mkdir meu-projeto-typescript
```

Acesse a pasta criada.

```zsh
$ cd meu-projeto-typescript
```

Inicie um projeto nodejs.

```zsh
$ yarn init -y
```

Adicione o typescript como dependência de desenvolvimento.

```zsh
$ yarn add -D typescript
```

Crie o arquivo de configuração do typescript.

```zsh
$ yarn tsc --init
```

Abra o arquivo `tsconfig.json` na raiz do projeto e descomente as configs abaixo:

```json
{
  "outDir": "./build",
  "rootDir": "./src"
}
```

Execute o typescrip.

```zsh
$ yarn tsc
```

Adicione o `ts-node-dev` como dependência de desenvolvimento para rodar o projeto em seu ambiente.

```zsh
$ yarn add -D ts-node-dev
```

Abra o arquivo `package.json` na raiz do projeto e adicione abaixo:

```json
{
  "scripts": {
    "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts",
    "start": "ts-node ./dist/server.js",
    "build": "tsc"
  }
}
```

Adicione o `express` como dependência do projeto.

```zsh
yarn add express
yarn add -D @types/express
```

Crie uma nova pasta `src` na raiz do projeto e adicione um novo arquivo `server.ts`.

```zsh
$ mkdir src
$ cd src
$ touch server.ts
```

Abra o arquivo `src/server.ts` e adicione o código abaixo:

```typescript
import express from "express";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  return res.send({
    message: `Olá mundo!!`,
  });
});

app.listen(3000, () => console.log("Executando na porta 3000"));
```

Execute o projeto

```zsh
$ yarn
$ yarn dev
```
