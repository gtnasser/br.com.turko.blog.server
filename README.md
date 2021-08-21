# BrComTurkoBlogTutorial

Working blogging website with pure HTML, CSS and JS tutorial.
* HTML, CSS and JS only, no other library. 
* [Firebase firestore]() to store/retrieve blog data.
* [node.js] server to send email and get data from remote db.

Ref:
* [Kunaal Tutorial](https://dev.to/kunaal438/fullstack-how-to-create-a-working-blogging-website-with-pure-html-css-and-js-in-2021-9di) Kunaal is a fullstack developer, *Modern Web* Youtube channel. 

### 0. Pré-requisitos

Necessário instalar o [Node.js]](https://nodejs.org), os pré-requisitos são instalados usando o npm.

```sh
$ npm -v
6.9.0
```

### 1. Criar o projeto local

```sh
$ md br.com.turko.blog.tutorial
$ cd br.com.turko.blog.tutorial
$ echo # BrComTurkoBlogTutorial >> README.md
```

### 2. Criar o repositório local do projeto e associá-lo a um repositório remoto

Associar a um repositório existente no Github, e substituir o seu conteúdo por este projeto.
> Atenção: o uso da opção -f **zera o conteúdo do repositório remoto** antes de enviar o conteúdo do repositório local.

```sh
$ git init
$ git add .
$ git commit -m "project path creation"
$ git branch -M main
$ git remote add origin https://github.com/gtnasser/br.com.turko.blog.tutorial.git
$ git push -u -f origin master
```

### 3. Instalar os pacotes no node

* express.js - is to create a server
* express-fileupload - is to handle uploads
* nodemon - is to run server continuously

criar o arquivo package.js
```
{
    "name": "br-com-turko-blog-tutorial",
    "version": "1.0.0",
    "description": "",
    "main": "server.js",
    "scripts": {
      "start":"nodemon server.js"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "express-fileupload": "^1.2.1",
      "express.js": "^1.0.0",
      "nodemon": "^2.0.12"
    }
  }
```

criar o arquivo server.js
```
```
