export default class ShoppingCtrl {
  constructor($state, ClothService) {
    'ngInject';

    this.$state = $state;
    this.ClothService = ClothService;
  }

  $onInit() {
    this.clothes = [];
  }

  loadMore() {
    if (this.isLoading) {
      return;
    }

    this._getClothes();
  }

  loadImage(name) {
    return require(`../../../images/${name}`);
  }

  _getClothes() {
    this.isLoading = true;
    this.ClothService.getClothes()
      .then(clothes => {
        console.info('clothes', clothes);
        this.clothes = this.clothes.concat(clothes);
        this.isLoading = false;
      })
      .catch(err => console.error(err));
  }
}
