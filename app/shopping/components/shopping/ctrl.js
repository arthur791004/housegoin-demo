export default class ShoppingCtrl {
  constructor($state, $uibModal, ClothService) {
    'ngInject';

    this.$state = $state;
    this.$uibModal = $uibModal;
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

  openClothViewerModal(cloth) {
    const clothViewerModal = this.$uibModal.open({
      component: 'clothViewer',
      resolve: {
        cloth,
      },
      backdrop: 'static',
      keyboard: false,
    });
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
