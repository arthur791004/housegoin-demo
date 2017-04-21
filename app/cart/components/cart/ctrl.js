export default class CartCtrl {
  constructor(CartService) {
    'ngInject';

    this.CartService = CartService;
  }

  $onInit() {
    this.carts = this.CartService.get();
  }

  getTotalPrice() {
    return this.carts
      .map(cart => cart.cloth.price)
      .reduce((p1, p2) => p1 + p2);
  }
}
