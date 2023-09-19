import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
  {
    title: 'Aperol Spritz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
];

const food = [
  {
    title: 'Crab Cakes',
    price: '$14',
    tags: 'Crispy Fish Cakes',
  },
  {
    title: 'Beef Wellington',
    price: '$20',
    tags: 'Beef wrapped in pastry',
  },
  {
    title: 'Baked Stuffed Lobster',
    price: '$22',
    tags: 'Lobster stuffed with vegetables',
  },
  {
    title: 'Chicken Curry',
    price: '$15',
    tags: 'Medium spiced Curry',
  },
  {
    title: 'French Pork Rillettes',
    price: '$16',
    tags: 'Spicy Pork served with vegetables',
  },
  {
    title: 'Chips',
    price: '$5',
    tags: 'French fries',
  },
  {
    title: 'Special Rice',
    price: '$6',
    tags: 'Indian styled rice',
  },
  {
    title: 'Crispy Fried Oysters',
    price: '$14',
    tags: 'Deep fried in batter, served with vegetables',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Best Restaurant 2020',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Best Upcoming Restaurant 2021.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Best Restaurant Hospitality 2018, 2019',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Multiple Chef of the Year Awards',
  },
];

export default { wines, food, awards };
