const assortment = [
  {
    id: 1,
    title: 'с фуа-гра',
    stock: 0,
    weight: '0,5',
    quantity: 10,
    bonus: {
      quantity: 1, text: 'мышь в подарок'
    },
    description: 'Печень утки разварная с артишоками.'
  },
  {
    id: 2,
    title: 'с рыбой',
    stock: 42,
    weight: '2',
    quantity: 40,
    bonus: {
      quantity: 2, text: 'мыши в подарок'
    },
    description: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
  },
  {
    id: 3,
    title: 'с курой',
    stock: Math.round(Math.random()),
    weight: '5',
    quantity: 100,
    bonus: {
      quantity: 5, text: 'мышей в подарок заказчик доволен'
    },
    description: 'Филе из цыплят с трюфелями в бульоне.'
  }
]

export default assortment