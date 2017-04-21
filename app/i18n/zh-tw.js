export default function($translateProvider) {
  $translateProvider.translations('zh-tw', {
    // global
    MSG_CONFIRM: '確認',
    MSG_CANCEL: '取消',

    // menu
    MENU_CART: '購物車',
    MENU_SHOPPING: '購物',
    MENU_TEST: '測試',
    MENU_TEST_1: '測試1',
    MENU_TEST_2: '測試2',

    // cart
    CART_TITLE: '購物車',
    CART_TOTAL_PRICE: '總價',

    // cloth
    CLOTH_NAME: '品名',
    CLOTH_DESCRIPTION: '描述',
    CLOTH_PRICE: '價格',
    CLOTH_RATE: '評價',
    CLOTH_CATEGORY: '種類',
    CLOTH_GROUP: '組別',
    CLOTH_AGE: '年齡層',
    CLOTH_GENDER: '性別',
    CLOTH_SIZE: '尺寸',
    CLOTH_ADD_TO_CART: '加入購物車',
    CLOTH_ADD_TO_CART_SUCCESS: '{{ name }} 加入購物車成功',

    // shopping
    SHOPPING_TITLE: '購物',
    SHOPPING_SORT: '排序',

  });
}
