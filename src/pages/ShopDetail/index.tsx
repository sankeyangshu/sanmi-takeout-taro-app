import { Alarm, ArrowRight, Gift, Location, Phone, Trash } from '@nutui/icons-react-taro';
import { Avatar, Badge, Image, Popup, Price, Rate } from '@nutui/nutui-react-taro';
import {
  CommonEventFunction,
  ScrollView,
  Swiper,
  SwiperItem,
  SwiperProps,
  Text,
  View,
} from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import coffee from '@/assets/images/coffee.png';
import BasicLayout from '@/components/BasicLayout';
import useNavBarInfo from '@/hooks/useNavBarInfo';

const ShopDetail = () => {
  // 获取状态栏信息
  const { contentHeight } = useNavBarInfo();

  // 标签
  const tabList = ['商品', '评价', '商家'];
  // 当前选中的导航栏
  const [tabIndex, setTabIndex] = useState(0);

  // 滑动属性
  const [transtionTime] = useState(100);
  // tab底部状态栏偏移量
  const [swiperCurrentTabLeft, setSwiperCurrentTabLeft] = useState(0);

  /**
   * 切换tab导航栏
   * @param {number} value 选中的导航下标
   */
  const onChangeTabs = (value: number) => {
    setTabIndex(value);
    setSwiperCurrentTabLeft(value * 70); // 修改tab底部状态栏偏移量
  };
  const onSwiperAnimationFinish: CommonEventFunction<SwiperProps.onChangeEventDetail> = ({
    detail: { current },
  }) => {
    onChangeTabs(current);
  };

  // 一级菜单列表
  const menuList = [
    {
      id: 'coffee',
      name: '奶茶饮品',
    },
    {
      id: 'hamburg',
      name: '炸鸡汉堡',
    },
    {
      id: 'lightFood',
      name: '轻食简餐',
    },
    {
      id: 'food',
      name: '特色美味',
    },
  ];
  const [menuType, setMenuType] = useState('coffee');

  // 显示/隐藏购物车
  const [showShopCartModel, setShowShopCartModel] = useState(false);

  // 去结算
  const onSubmitPayOrder = () => {
    Taro.navigateTo({ url: '/pages/PayOrder/index' });
  };

  return (
    <BasicLayout>
      {/* 商家头部信息 开始 */}
      <View className="w-100% p-[20rpx] flex flex-row bg-[#fff] box-border">
        <View className="flex-[0_0_30%] flex-center">
          <Image src={coffee} width="100" height="100" radius="6rpx" lazyLoad mode="aspectFill" />
        </View>
        <View className="flex-[0_0_70%] flex flex-col justify-between">
          <View className="font-bold text-[38rpx] color-[#303133]">店铺名称</View>
          <View className="text-[26rpx]  color-[#747679]">月售 780单 | 专送约40分钟</View>
          <View className="text-[26rpx] color-[#C0C4CC]">
            公告:疫情期间送达可能会延长,请耐心等待
          </View>
        </View>
      </View>
      {/* 商家头部信息 结束 */}

      <View className="w-100%" style={{ height: contentHeight }}>
        {/* Tab标签页 开始 */}
        <View className="w-100% h-[80rpx] bg-[#fff] z-10 border-b-[1px] border-b-solid border-b-[#efefef]">
          <View className="w-[420rpx] h-100% flex relative">
            {tabList.map((item, index) => (
              <>
                <View
                  key={index}
                  className={`'w-[140rpx] flex-center color-[#666] text-[32rpx]' ${
                    tabIndex === index && 'color-[#333] font-bold'
                  }`}
                  style={{ transition: `${transtionTime}ms` }}
                  onClick={() => onChangeTabs(index)}
                >
                  {item}
                </View>
                <View
                  className="absolute bottom-0 w-[100%] flex-justify"
                  style={{
                    transition: `${transtionTime}ms`,
                    left: `${swiperCurrentTabLeft - 70}px`,
                  }}
                >
                  <View className="w-[60rpx] h-[6rpx] bg-[#157658]"></View>
                </View>
              </>
            ))}
          </View>
        </View>
        {/* Tab标签页 结束 */}
        <Swiper
          current={tabIndex}
          duration={transtionTime}
          onAnimationFinish={onSwiperAnimationFinish}
          className="h-100%"
        >
          {/* 商品 开始 */}
          <SwiperItem>
            {/* 商品列表 开始 */}
            <View className="w-100% h-100% flex">
              <View className="flex-[0_0_28%]">
                <ScrollView scrollY scrollWithAnimation className="h-100% pb-[20rpx]">
                  {menuList.map((item) => (
                    <View
                      key={item.id}
                      className="color-[#999999] text-[26rpx] py-[30rpx] px-[10rpx] text-center bg-transparent border-l-[6rpx] border-solid border-transparent transition-all duration-[0.6s]"
                      style={
                        menuType === item.id
                          ? {
                              color: '#157658',
                              borderLeftColor: '#157658',
                              fontWeight: 'bold',
                              backgroundColor: '#fff',
                            }
                          : {}
                      }
                      onClick={() => setMenuType(item.id)}
                    >
                      {item.name}
                    </View>
                  ))}
                  <View className="h-[200rpx]"></View>
                </ScrollView>
              </View>
              <View className="flex-[0_0_72%] bg-[#fff]">
                <ScrollView scrollY scrollWithAnimation className="h-100% pb-[20rpx]">
                  <View className="w-95% mx-auto">
                    <View className="h-[100rpx] flex-align text-[26rpx] font-bold">奶茶饮品</View>
                    <View className="flex mb-[20rpx] pb-[20rpx] border-b-[1px] border-b-dashed border-b-[#f5f5f5]">
                      <View className="flex-[0_0_30%] flex-center">
                        <View className="w-[140rpx] h-[140rpx] relative rounded-[6rpx]">
                          <Image
                            src={coffee}
                            width="70"
                            height="70"
                            radius="6rpx"
                            lazyLoad
                            mode="aspectFill"
                          />
                          <View className="absolute top-0 left-0 flex-center w-100% h-100% text-[26rpx] bg-[#ffffff99] color-[#999]">
                            已售罄
                          </View>
                        </View>
                      </View>
                      <View className="flex-[0_0_70%] flex flex-col justify-between">
                        <View className="text-[26rpx] font-bold color-[#343434]">商品标题</View>
                        <View className="text-[24rpx] color-[#999999] line-clamp-2 text-ellipsis">
                          商品描述
                        </View>
                        <View className="flex-align justify-between">
                          <Price price={10} size="normal" thousands />
                          {/* <View className="color-[#fff] bg-[#157658] rounded-[100rpx] py-[4rpx] px-[16rpx] text-[24rpx]">
                        选规格
                      </View> */}
                          <View className="flex items-center flex-row">
                            <View className="i-local-minus text-[40rpx] color-[#157658]"></View>
                            <Text className="text-[28rpx] mx-[10rpx]">1</Text>
                            <View className="i-local-plus text-[40rpx] color-[#157658]" />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View className="h-[200rpx]"></View>
                </ScrollView>
              </View>
            </View>
            {/* 商品列表 结束 */}
          </SwiperItem>
          {/* 商品 结束 */}

          {/* 评价 开始 */}
          <SwiperItem>
            <View className="relative w-100% h-100% bg-[#fff]">
              <View className="flex-center h-[160rpx]">
                <View className="w-[180rpx] flex-center flex-col">
                  <View className="color-[#157658] text-[64rpx] mb-[4rpx]">4.5</View>
                  <View className="text-[24rpx] color-[#555555]">商家评分</View>
                </View>
                <View className="flex-1 flex flex-col">
                  <View className="flex-center flex-row text-[24rpx]">
                    <View className="color-[#555555]">包装</View>
                    <View className="px-[12rpx]">
                      <Rate allowHalf readOnly defaultValue={4.5} />
                    </View>
                    <View className="color-[#157658]">4.5</View>
                  </View>
                  <View className="flex-center flex-row text-[24rpx]">
                    <View className="color-[#555555]">口味</View>
                    <View className="px-[12rpx]">
                      <Rate allowHalf readOnly defaultValue={4.5} />
                    </View>
                    <View className="color-[#157658]">4.5</View>
                  </View>
                </View>
                <View className="w-[200rpx] flex-center flex-col b-l-[2rpx] b-l-solid b-l-[#efefef]">
                  <View className="text-[54rpx] color-[#999999]">95%</View>
                  <View className="text-[24rpx] color-[#999999]">配送满意度</View>
                </View>
              </View>
              <View className="w-100% h-[30rpx] bg-[#f5f5f5]"></View>
              <View className="flex text-[22rpx] p-[20rpx] color-[#999999]">
                <View className="mr-[26rpx]">
                  <Avatar
                    size="small"
                    src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
                  />
                </View>
                <View className="flex-1 color-[#000]">
                  <View className="flex-align justify-between text-[32rpx]">
                    <Text>用户昵称</Text>
                    <Text>2024-01-02</Text>
                  </View>
                  <View className="flex-align flex-row">
                    <Text className="mr-[12rpx] text-[26rpx] color-[#999]">评分</Text>
                    <Rate allowHalf readOnly defaultValue={4.5} />
                  </View>
                  <View className="mt-[8rpx] flex flex-col text-[28rpx] color-[#555555] text-left">
                    <View>用户评价</View>
                    <View className="w-100% mt-[8rpx] flex flex-wrap">
                      <View className="w-25% pr-[10rpx] border-box">
                        <Image src={coffee} width="100%" radius="4px" mode="widthFix" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/* 分割线 */}
              <View className="h-[2rpx] mx-[20rpx] bg-[#f5f5f5]"></View>
            </View>
          </SwiperItem>
          {/* 评价 结束 */}

          {/* 商家 开始 */}
          <SwiperItem>
            <View className="w-100% flex flex-col">
              <View className="h-[80rpx] px-[30rpx] flex bg-[#fff] border-bottom">
                <View className="flex-align flex-row flex-[0_0_80%] overflow-hidden">
                  <Location size="30rpx" />
                  <Text className="flex-1 ml-[10rpx] text-[28rpx] truncate">商家地址</Text>
                </View>
                <View className="flex-align justify-end flex-[0_0_20%]">
                  <ArrowRight size="30rpx" />
                </View>
              </View>
              <View className="h-[80rpx] px-[30rpx] flex bg-[#fff] border-bottom">
                <View className="flex-align flex-row flex-[0_0_80%] overflow-hidden">
                  <Phone size="30rpx" />
                  <Text className="flex-1 ml-[10rpx] text-[28rpx] truncate">123456789</Text>
                </View>
                <View className="flex-align justify-end flex-[0_0_20%]">
                  <ArrowRight size="30rpx" />
                </View>
              </View>
              <View className="h-[80rpx] mt-[30rpx] px-[30rpx] bg-[#fff]">
                <View className="h-100% flex-align overflow-hidden">
                  <Alarm size="30rpx" />
                  <Text className="flex-1 ml-[10rpx] text-[28rpx] truncate">
                    营业时间：2:00-3:00
                  </Text>
                </View>
              </View>
            </View>
          </SwiperItem>
          {/* 商家 结束 */}
        </Swiper>
      </View>

      {/* 购物车 开始 */}
      {tabIndex === 0 && (
        <View className="fixed bottom-[40rpx] w-[92%] left-0 right-0 h-[80rpx] mx-auto rounded-[100rpx] bg-[#fff] flex-align z-[899] shadow-[0_0_20rpx_rgba(0,0,0,.05)]">
          <View className="h-100% flex-[0_0_70%] flex-align justify-between">
            <View
              className="h-100% flex-align pl-[20rpx]"
              onClick={() => setShowShopCartModel(true)}
            >
              <Badge value={1} color="#157658" top="-10" right="-70"></Badge>
              <View className="flex-align">
                <Gift size="20" color="#343434" />
                <Text className="ml-[10rpx] text-[28rpx]">购物袋</Text>
              </View>
            </View>
            <View className="pr-[20rpx]">
              <Price price={0} size="large" thousands />
            </View>
          </View>
          <View className="h-100% flex-[0_0_30%] overflow-hidden rounded-tr-[100rpx] rounded-br-[100rpx]">
            <View
              className="w-100% h-100% bg-[#157658] flex-center color-[#fff] text-[30rpx]"
              onClick={onSubmitPayOrder}
            >
              去结算
            </View>
          </View>
        </View>
      )}

      {/* 购物车 结束 */}

      {/* 购物车弹出层 开始 */}
      <Popup
        visible={showShopCartModel}
        style={{ height: '60%' }}
        position="bottom"
        round
        onClose={() => {
          setShowShopCartModel(false);
        }}
      >
        <View className="w-100% h-100% py-[20rpx] px-[40rpx] flex-align flex-col box-border">
          <View className="w-100% h-[60rpx] mb-[20rpx] leading-[100rpx] flex justify-between flex-row text-[32rpx] border-bottom">
            <View className="h-100% flex-center color-[#999999] text-[28rpx]">
              共1件商品，总计
              <Price price={0} size="normal" thousands />
            </View>
            <View className="h-100% flex-center flex-row color-[#999999] text-[28rpx]">
              <Trash color="#999" size="28rpx" />
              清空
            </View>
          </View>
          <ScrollView scrollY className="w-100% h-100% overflow-hidden">
            {/* 商品列表 开始 */}
            <View className="w-100% flex mb-[20rpx] pb-[20rpx] border-bottom">
              <View className="flex-[0_0_30%] flex-center">
                <View className="w-[140rpx] h-[140rpx] rounded-[6rpx]">
                  <Image
                    src={coffee}
                    width="70"
                    height="70"
                    radius="6rpx"
                    lazyLoad
                    mode="aspectFill"
                  />
                </View>
              </View>
              <View className="flex-[0_0_70%] flex flex-col justify-between">
                <View className="text-[26rpx] font-bold color-[#343434]">商品标题</View>
                <View className="text-[24rpx] color-[#999999] line-clamp-2 text-ellipsis">
                  商品描述
                </View>
                <View className="flex-align justify-between">
                  <Price price={10} size="normal" thousands />
                  <View className="flex items-center flex-row">
                    <View className="i-local-minus text-[40rpx] color-[#157658]"></View>
                    <Text className="text-[28rpx] mx-[10rpx]">1</Text>
                    <View className="i-local-plus text-[40rpx] color-[#157658]" />
                  </View>
                </View>
              </View>
            </View>
            {/* 商品列表 结束 */}
          </ScrollView>
          {/* 去结算 开始 */}
          <View className="w-100% h-[100rpx] bg-[#157658] flex-center color-[#fff] text-[30rpx] rounded-[100rpx]">
            去结算
          </View>
          {/* 去结算 结束 */}
        </View>
      </Popup>
      {/* 购物车弹出层 结束 */}
    </BasicLayout>
  );
};

export default ShopDetail;
