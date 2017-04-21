export default class ClothService {
  constructor($q, $timeout) {
    'ngInject';

    this.$q = $q;
    this.$timeout = $timeout;
  }

  getClothes() {
    return this._generateClothes(100);
  }

  _generateClothes(num) {
    return this.$q((resolve, reject) => {
      const clothes = [];
      for (let i = 0; i < num; i++) {
        clothes.push(getCloth());
      }

      this.$timeout(() => resolve(clothes), 1000);
    });
  }
}

function getCloth() {
  const { group, category, gender, age, sizes } = getMetadata();
  const imageUrl = `cloth_0${getRandomInt(3) + 1}.jpg`;
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
