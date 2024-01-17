export default defineAppConfig({
  pages: [
    'pages/Home/index',
    'pages/Order/index',
    'pages/Mine/index',
    'pages/Login/index',
    'pages/Register/index',
    'pages/ShopDetail/index',
    'pages/PayOrder/index',
    'pages/OrderDetail/index',
    'pages/MyCoupon/index',
    'pages/MyAddress/index',
    'pages/MyCollect/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#157658',
    navigationBarTitleText: '三米外卖',
    navigationBarTextStyle: 'white',
  },
  tabBar: {
    selectedColor: '#157658',
    color: '#666',
    list: [
      {
        pagePath: 'pages/Home/index', // 菜单路径
        text: '首页',
        iconPath: 'assets/images/home.png', // 默认图标
        selectedIconPath: 'assets/images/home-active.png', // 选中图标
      },
      {
        pagePath: 'pages/Mine/index',
        text: '我的',
        iconPath: 'assets/images/mine.png',
        selectedIconPath: 'assets/images/mine-active.png',
      },
    ],
  },
});
