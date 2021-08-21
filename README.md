# BrComTurkoBlogTutorial

Working blogging website with pure HTML, CSS and JS tutorial.
* HTML, CSS and JS only, no other library. 
* [Firebase firestore]() to store/retrieve blog data.

Referências:
* [Kunaal Tutorial](https://dev.to/kunaal438/fullstack-how-to-create-a-working-blogging-website-with-pure-html-css-and-js-in-2021-9di) Kunaal is a fullstack developer, *Modern Web* Youtube channel. 
* https://angular-templates.io/tutorials/about/firebase-authentication-with-angular (gtnasser@1964)

### 0. Pré-requisitos

Necessário instalar o [Node.js]](https://nodejs.org), os pré-requisitos são instalados usando o npm.

Necessário instalar o [Angular](https://angular.io), a última versão do CLI pode ser instalada por ```ng install -g @angular/cli```.

```sh
$ ng version
...
Angular CLI: 10.1.7
Node: 10.16.3
OS: win32 x64
Angular: 10.1.6
...
```

### 1. Criar o projeto

```sh
$ md br.com.turko.blog.tutorial
$ cd br.com.turko.blog.tutorial
```

### 2. Associar o projeto a um repositório remoto

Associar a um repositório existente no Github, e substituir o seu conteúdo por este projeto.
> Atenção: o uso da opção -f **zera o conteúdo do repositório remoto** antes de enviar o conteúdo do repositório local.

```sh
$ git init
$ git remote add origin https://github.com/gtnasser/br.com.turko.blog.tutorial.git
$ git push -u -f origin master
```

