export let catalog = [
    {
      id: 1,
      name: 'Футболка',
      description: 'Простая футболка с коротким рукавом',
      sizes: ['S', 'M', 'L', 'XL'],
      price: 1000,
      available: true
    },
    {
      id: 2,
      name: 'Джинсы',
      description: 'Классические джинсы на каждый день',
      sizes: ['28/30', '30/30', '32/30', '34/30', '36/30'],
      price: 2500,
      available: true
    },
    {
      id: 3,
      name: 'Куртка',
      description: 'Тёплая куртка с капюшоном',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      price: 5000,
      available: false
    },
    {
      id: 4,
      name: 'Шорты',
      description: 'Лёгкие шорты на лето',
      sizes: ['S', 'M', 'L', 'XL'],
      price: 800,
      available: true
    },
    {
      id: 5,
      name: 'Платье',
      description: 'Женское летнее платье',
      sizes: ['S', 'M', 'L'],
      price: 3500,
      available: true
    },
    {
      id: 6,
      name: 'Тестовый товар',
      description: 'Тестовый товар',
      sizes: [],
      price: 100,
      available: true
    }

  ];

export let cart = [
  {
    good: catalog[5],
    amount: 1
  }
];

