export default class AppHeaderCtrl {
  constructor($state) {
    'ngInject';

    this.$state = $state;
    this.menus = [];
  }

  $onInit() {
    this.menus.push(createNavbarMenu('MENU_SHOPPING', 'app.shopping', 'fa-shopping-bag'));
    this.menus.push(createNavbarMenu('MENU_CART', 'app.cart', 'fa-shopping-cart'));
    this.menus.push(createNavbarMenu('MENU_TEST', 'app.test', 'fa-globe', [
      createNavbarMenu('MENU_TEST_1', 'app.test.1'),
      createNavbarMenu('MENU_TEST_2', 'app.test.2'),
    ]));
  }

  hasSubmenus(menu) {
    return menu.submenus && 0 < menu.submenus.length;
  }
}

function createNavbarMenu(name, sref, icon = 'fa-circle-o', submenus = []) {
  return {
    name,
    sref,
    icon,
    submenus,
  };
}
