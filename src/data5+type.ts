export interface MenuItem {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
  }
  
  export const items: MenuItem[] = [
    {
      id: 1,
      title: 'Buttermilk Pancakes',
      category: 'breakfast',
      price: 15.99,
      img: './images/item-1.jpeg',
      desc: 'Light, fluffy pancakes served with maple syrup and butter.',
    },
    {
      id: 2,
      title: 'Diner Double',
      category: 'lunch',
      price: 13.99,
      img: './images/item-2.jpeg',
      desc: 'Two juicy beef patties with cheese, lettuce, and special sauce.',
    },
    {
      id: 3,
      title: 'Godzilla Milkshake',
      category: 'shakes',
      price: 6.99,
      img: './images/item-3.jpeg',
      desc: 'A monstrous blend of vanilla ice cream, chocolate, and caramel.',
    },
  ];