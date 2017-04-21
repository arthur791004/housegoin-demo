export default class CartService {
  constructor($filter, CoreService) {
    'ngInject';

    this.$filter = $filter;
    this.CoreService = CoreService;
    this.cart = [];
  }

  add(cloth, size) {
    this.cart.push({
      cloth,
      size,
    });

    const title = this.$filter('translate')('CLOTH_ADD_TO_CART_SUCCESS', { name: cloth.name });
    this.CoreService.toastSuccess(title);
  }

  get() {
    return this.cart;
  }

  deleteByIndex(index) {
    if (index >= this.cart.length) {
      return;
    }

    this.cart.splice(index, 1);
  }
}
