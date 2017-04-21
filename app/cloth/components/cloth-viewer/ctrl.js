export default class ClothViewerCtrl {
  constructor(CartService, ClothService) {
    'ngInject';

    this.CartService = CartService;
    this.ClothService = ClothService;
  }

  $onInit() {
    this.cloth = this.resolve.cloth;
    this.sizes = this.ClothService.getSizes();
  }

  addToCart(cloth, size) {
    console.log('addToCart', cloth, size);
    this.CartService.add(cloth, size);
    this.close();
  }

  close() {
    this.modalInstance.close();
  }
}
