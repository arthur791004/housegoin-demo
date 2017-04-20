export default class ClothService {
  constructor() {
    'ngInject';

  }

  getClothes() {
    return generateClothes(100)
      .then(clothes => clothes)
      .catch(err => console.error(err));
  }
}

function generateClothes(num) {
  return new Promise((resolve, reject) => {
    const clothes = [];
    for (let i = 0; i < num; i++) {
      clothes.push(getCloth());
    }

    resolve(clothes);
  });
}

function getCloth() {
  const { group, category, gender, age, sizes } = getMetadata();
  const imageUrl = `../../images/cloth_0${getRandomInt(4)}`;
  const cloth = {
    name: getRandomString(),
    description: getRandomString(),
    imageUrl: imageUrl,
    rate: getRandomInt(5),
    price: getRandomInt(2000),
    inventory: getInventory(sizes),
    group: getRandomDataFromArray(group),
    category: getRandomDataFromArray(category),
    gender: getRandomDataFromArray(gender),
    age: getRandomDataFromArray(age),
  };

  return cloth;
}

function getRandomDataFromArray(array) {
  return array[getRandomInt(array.length)];
}

function getInventory(sizes) {
  const inventory = {};
  sizes.forEach(size => inventory[size] = getRandomInt(10));

  return inventory;
}

function getMetadata() {
  const metadata = {
    group: ['shirts', 'dresses', 'socks', 'pants'],
    category: ['women', 'men', 'body', 'girl'],
    gender: ['body', 'girl', 'neutral'],
    age: ['newborn', 'senior', 'teen', 'toddler', 'tween'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  };

  return metadata;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function getRandomString() {
  return Math.random().toString(36).slice(2);
}
