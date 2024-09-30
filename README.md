# Tech Challenge Front-End FIAP

## Problema

Estruturação do Front-End desenvolvido no Tech Challenge da Fase 1, sera substituída para uma nova plataforma de desenvolvimento utilizando React e realizando integração com back-end desenvolvendo na fase anterior, através de consumo de API Rest. 


## Estruturação das pastas
### Assets
Pasta contendo imagens e icones utilizados no site

### Components
Pasta de componentes funcionais criados para o site

### Configs
Pasta para definir as configurações do site, como por exemplo as constantes, url, etc...

### Context
Pasta contendo os providers para fazer o gerenciamento de estados (context api)

### Hooks
Pasta contendo os hooks personalizados

### Routes
Pasta utilizada para estruturar a navegação e as rotas do site

### Services
Pasta utilizada para chamada de apis externas

### Styles
Pasta utilizada para definir estilos globais

### Utils
Pasta para arquivos uteis, como por exemplo parsers.



## Docker

Para iniciar o container

```bash
  docker-compose up --build 
```
Para finalizar o container

```bash
  docker-compose down
```


## Scripts

No diretorio raiz do projeto, pode-se utilizar

### `npm install`

Para instalar as dependencias da aplicação


### `npm start`

Roda a aplicação no endereço [http://localhost:3000](http://localhost:3000)


### `npm run build`

Builda a aplicação