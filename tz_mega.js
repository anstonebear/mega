// Дан массив с данными, которые описывают древовидную структуру. Каждый элемент массива это объект содержащий следующие свойства: id, parent_id, name.
// Пример данных в массиве:
// const data = [
//   {
//     id: 1,
//     parentId: 0,
//     name: 'Электроника',
//   },
//   {
//     id: 7,
//     parentId: 2,
//     name: 'Смартфоны',
//   },
//   {
//     id: 2,
//     parentId: 1,
//     name: 'Мобильные телефоны',
//   },
//   {
//     id: 3,
//     parentId: 1,
//     name: 'Компьютеры и ноутбуки',
//   },
//   {
//     id: 5,
//     parentId: 3,
//     name: 'Ноутбуки',
//   },
//   {
//     id: 4,
//     parentId: 3,
//     name: 'Системные блоки',
//   },
//   {
//     id: 9,
//     parentId: 5,
//     name: 'Dell',
//   },
//   {
//     id: 8,
//     parentId: 5,
//     name: 'HP',
//   },
//   {
//     id: 10,
//     parentId: 5,
//     name: 'Lenovo',
//   },
//   {
//     id: 6,
//     parentId: 3,
//     name: 'Комплектующие',
//   },
// ];
// Напишите скрипт на языке JavaScript, который конвертирует данные из массива в древовидный JSON-объект и выводит его в console.log . Не используйте рекурсию.
// Пример конечного результата:
// json
// {
// "1": {
// "name": "Электроника",
// "children": {
// "2": {
// "name": "Мобильные телефоны",
// "children": {
// "7": {
// "name": "Смартфоны"
// }
// }
// },
// "3": {
// "name": "Компьютеры и ноутбуки",
// "children": {
// "5": {
// "name": "Ноутбуки",
// "children": {
// "9": {
// "name": "Dell"
// },
// "8": {
// "name": "HP"
// },
// "5": {
// "name": "Lenovo"
// }
// }
// },
// "4": {
// "name": "Системные блоки"
// },
// "6": {
// "name": "Комплектующие"
// }
// }
// }
// }
// }
// }

const data = [
    {
      id: 1,
      parentId: 0,
      name: 'Электроника',
    },
    {
      id: 7,
      parentId: 2,
      name: 'Смартфоны',
    },
    {
      id: 2,
      parentId: 1,
      name: 'Мобильные телефоны',
    },
    {
      id: 3,
      parentId: 1,
      name: 'Компьютеры и ноутбуки',
    },
    {
      id: 5,
      parentId: 3,
      name: 'Ноутбуки',
    },
    {
      id: 4,
      parentId: 3,
      name: 'Системные блоки',
    },
    {
      id: 9,
      parentId: 5,
      name: 'Dell',
    },
    {
      id: 8,
      parentId: 5,
      name: 'HP',
    },
    {
      id: 10,
      parentId: 5,
      name: 'Lenovo',
    },
    {
      id: 6,
      parentId: 3,
      name: 'Комплектующие',
    },
  ];
  
  const tree = {};
  const objs = {};
  
  data.forEach((item) => {
    const obj = { name: item.name };
  
    objs[item.id] = obj;
  
    if (item.parentId === 0) {
      tree[item.id] = obj;
    }
  });

  data.forEach((item )=> {
    if (item.parentId !== 0) {
      const parent = objs[item.parentId];

      parent.children = parent.children || {};
      parent.children[item.id] = objs[item.id];
    }
  });

  console.log(JSON.stringify(tree));