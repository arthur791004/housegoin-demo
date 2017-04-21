export default class ClothItemCtrl {
  constructor() {
    'ngInject';

  }

  $onInit() {

  }

  loadImage(name) {
    return require(`../../../images/${name}`);
  }
}
