

- Vemos o seguinte questionamento. Tenho uma aplicação que gera dois
array.
- O problema a ser resolvido é, percorrer o primerio array verificando
se o entities_id é igual ao name do segundo array.

```javascript

// Primeiro Array
    const arrOne = [
  {
    entities_id: "Clientes",
    name: "Americanas",
    comment: "comentario das americanas 1",
  },
  {
    entities_id: "Americanas",
    name: "Parq.padro",
    comment: "Matriz Campinas",
  },

  {
    entities_id: "Clientes",
    name: "page menos",
    comment: "comentario da page menos",
  },
  {
    entities_id: "pague menos",
    name: "loja1",
    comment: "Campinas",
  },
  {
    entities_id: "DMS",
    name: "Filial de Juiz de Fora",
    comment: "Minas Gerais",
  },
];

```

```javascript
// Segundo Array
const arrTwO = [
  {
    id: 13,
    name: "Clientes",
  },
  {
    id: 14,
    name: "DMS",
  },
  {
    id: 16,
    name: "DXL",
  },
];

```


```javascript
// function
function compareToArray(arrOne, arrTwO) {
  const newArray = [];

  arrOne.forEach((oItem) => {
    const response = arrTwO.find((tItem) => tItem.name == oItem.entities_id);

    if (response != undefined) {
      const mm = [
        {
          entities_id: response?.id,
          name: oItem.name,
          comment: oItem.comment,
        },
      ];

      newArray.push(...mm);
    }
  });
  return newArray;
}

```

```javascript
// resposta
const response = compareToArray(arrOne, arrTwO);
console.log(response);

// Saída
[
  {
    entities_id: 13,
    name: 'Americanas',
    comment: 'comentario das americanas 1'
  },
  {
    entities_id: 13,
    name: 'page menos',
    comment: 'comentario da page menos'
  },
  {
    entities_id: 14,
    name: 'Filial de Juiz de Fora',
    comment: 'Minas Gerais'
  }
]

```