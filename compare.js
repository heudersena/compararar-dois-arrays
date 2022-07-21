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

const response = compareToArray(arrOne, arrTwO);
console.log(response);
