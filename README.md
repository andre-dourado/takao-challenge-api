<!-- GETTING STARTED -->
## Introdução

Este backend foi proposto pela equipe de desenvolvimento da empresa Takao. A ideia é montar uma API no qual baseia-se em um mercado fictício. 
Através deste é possível retornar dados previamente cadastrados. No desenvolvimento foi utilizado o Node.js em conjunto com o PostegreSQL. 
Além disso, vale destacar que o projeto foi desenvolvido respeitando os princípios SOLID. 

### Pré-requisitos

É necessário instalar o yarn para rodar o projeto.
* MacOS
  ```sh
  brew install yarn
  ```

### Instalação

1. Clona o repositório
   ```sh
   https://github.com/andrewdourado/takao-challenge-api.git
   ```
2. Instale os pacotes
   ```sh
   yarn
   ```
4. Rode o projeto
   ```JS
   yarn build:server
   ```

## Rotas da aplicação

- **`GET /categorias`**: Retorna todas as categorias:

```json
[
  {
    "id": 1,
    "descricao": "Higiene",
    "created_at": "2020-11-27T13:22:36.935Z",
    "updated_at": "2020-11-27T13:22:36.935Z"
  }
]
```

- **`GET /produtos`**: Retorna os produtos cadastrados junto com a URL da imagem mantida na Amazon S3:

```json
[
  {
    "id": 1,
    "titulo": "Sabonete",
    "descricao": "Sabonete",
    "preco": 4,
    "imagem": "sabonete.png",
    "categoriaId": 1,
    "created_at": "2020-11-27T16:21:20.164Z",
    "updated_at": "2020-11-27T16:21:20.164Z",
    "imagem_url": "https://app-takao.s3.amazonaws.com/sabonete.png"
  }
]
```

- **`GET /itemPedido`**: Retorna os pedidos que estão no carrinho: 

```json
[
  {
    "id": 7,
    "productId": 1,
    "purchaseId": null,
    "quantidade": 12,
    "preco": 7561.8,
    "finalizado": true,
    "created_at": "2020-11-27T21:15:09.549Z",
    "updated_at": "2020-11-27T21:15:09.549Z",
    "product": {
      "id": 1,
      "titulo": "Sabonete",
      "descricao": "Sabonete em barra para peles oleosas",
      "preco": 4.7,
      "imagem": "sabonete.png",
      "categoriaId": 1,
      "quantidadeEmEstoque": 150,
      "created_at": "2020-11-27T19:57:27.949Z",
      "updated_at": "2020-11-27T19:57:27.949Z"
    }
  }
]
```

- **`GET /pedidos`**: Retorna os items que já foram comprados:

```json
[
  {
    "id": 1,
    "codigo": "564223",
    "statusId": 4,
    "created_at": "2020-11-27T22:16:54.862Z",
    "updated_at": "2020-11-27T22:16:54.862Z",
    "status": {
      "id": 4,
      "descricao": "Enviado para a transportadora",
      "created_at": "2020-11-27T22:10:40.773Z",
      "updated_at": "2020-11-27T22:10:40.773Z"
    }
  }
]
```

- **`GET /status`**: Retorna todos os status cadastrados:

```json
[
  {
    "id": 1,
    "descricao": "finalizado",
    "created_at": "2020-11-27T18:54:18.343Z",
    "updated_at": "2020-11-27T18:54:18.343Z"
  }
]
```

## Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Typescript][ts]
- [TypeORM](https://typeorm.io/#/)
- [date-fns](https://date-fns.org/)
- [express](https://expressjs.com)
- [pg](https://node-postgres.com/)
- [date-fns](https://date-fns.org/)
- [VS Code][vscode] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

---

Made with ♥ by André Dourado :wave: [Get in touch!](https://www.linkedin.com/in/andre-dourado/)

[ts]: https://www.typescriptlang.org
[vscode]: https://code.visualstudio.com/
[yarn]: https://yarnpkg.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
