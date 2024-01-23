import { ArrowRight, Location, Store } from '@nutui/icons-react-taro';
import { ConfigProvider, Empty, Image, Popup, Price } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useState } from 'react';
import coffee from '@/assets/images/coffee.png';
import BasicLayout from '@/components/BasicLayout';

const PayOrder = () => {
  // 配送方式 - 1.送货上门 / 2.门店自提
  const [deliveryType, setDeliveryType] = useState(1);

  // 是否显示优惠券弹窗
  const [isShowCouponPopup, setIsShowCouponPopup] = useState(false);

  // 优惠券状态列表
  const [couponStatus] = useState([
    { title: '可用', type: 0 },
    { title: '不可用', type: 1 },
  ]);

  // 当前选中的优惠券状态
  const [couponStateCurrent, setCouponStateCurrent] = useState(0);

  return (
    <BasicLayout>
      {/* 配送地址及方式 开始 */}
      <View className="w-100% bg-[#fff] p-[20rpx] box-border">
        <View className="flex-align h-[120rpx]">
          <View className="flex-center mr-[20rpx]">
            <Location size="36rpx" />
          </View>
          <View className="flex-1 flex flex-col">
            <View className="flex-align h-[60rpx]">
              <View className="mr-[20rpx] text-[28rpx] font-bold color-[#232323]">三棵杨树</View>
              <View className="text-[26rpx] color-[#787878]">123456</View>
            </View>
            <View className="flex-align h-[60rpx] text-[28rpx] color-[#232323]">这是详细地址</View>
          </View>
          <View className="flex-center">
            <ArrowRight size="36rpx" />
          </View>
        </View>
        <View className="mt-[20rpx] flex-align justify-between">
          <View
            className="flex-[0_0_45%] h-[80rpx] flex-center rounded-[4rpx] border-[2rpx] border-solid border-[#eee]"
            style={
              deliveryType === 1
                ? {
                    color: '#fff',
                    borderColor: '#157658',
                    backgroundColor: '#157658',
                  }
                : { color: '#232323' }
            }
            onClick={() => setDeliveryType(1)}
          >
            <View className="i-local-delivery text-[38rpx]" />
            <Text className="pl-[20rpx] text-[28rpx]">送货上门</Text>
          </View>
          <View
            className="flex-[0_0_45%] h-[80rpx] flex-center rounded-[4rpx] border-[2rpx] border-solid border-[#eee]"
            style={
              deliveryType === 2
                ? {
                    color: '#fff',
                    borderColor: '#157658',
                    backgroundColor: '#157658',
                  }
                : { color: '#232323' }
            }
            onClick={() => setDeliveryType(2)}
          >
            <Store size="36rpx" />
            <Text className="pl-[20rpx] text-[28rpx]">门店自提</Text>
          </View>
        </View>
      </View>
      {/* 配送地址及方式 结束 */}

      {/* 商品列表 开始 */}
      <View className="w-100% mt-[20rpx] p-[20rpx] bg-[#fff] box-border">
        <View className="text-[26rpx] font-bold color-[#232323]">商品列表</View>
        <View className="flex-align py-[20rpx] border-bottom">
          <View className="flex-[0_0_20%] flex-center">
            <Image
              src={coffee}
              width="110rpx"
              height="110rpx"
              radius="6rpx"
              lazyLoad
              mode="aspectFill"
            />
          </View>
          <View className="flex-[0_0_80%] flex flex-col justify-between">
            <View className="w-[90%] text-[28rpx] color-[#343434] truncate">商品标题</View>
            <View className="text-[26rpx] color-[#999999]">商品规格</View>
            <View className="flex-align justify-between">
              <Price price={10} size="normal" thousands />
              <View className="text-[28rpx] color-[#232323]">x1</View>
            </View>
          </View>
        </View>
      </View>
      {/* 商品列表 结束 */}

      {/* 订单信息 开始 */}
      <View className="w-100% mt-[20rpx] p-[20rpx] bg-[#fff] box-border">
        <View className="text-[26rpx] font-bold color-[#232323]">订单信息</View>
        <View className="h-[90rpx] flex-align justify-between border-bottom">
          <View className="text-[28rpx] color-[#232323]">
            商品合计<Text className="text-[24rpx] pl-[10rpx] color-[#999999]">(共1件商品)</Text>
          </View>
          <Price price={10} size="normal" thousands />
        </View>
        <View className="h-[90rpx] flex-align justify-between border-bottom">
          <View className="text-[28rpx] color-[#232323]">优惠券</View>
          <View className="flex flex-row" onClick={() => setIsShowCouponPopup(true)}>
            <View className="text-[24rpx] color-[#999999]">无可用</View>
            {/* <Price price={0} size="normal" thousands /> */}
            <View className="ml-[6rpx] flex-align">
              <ArrowRight size="28rpx" color="#999" />
            </View>
          </View>
        </View>
        <View className="h-[90rpx] flex-align justify-between border-bottom">
          <View className="text-[28rpx] color-[#232323]">配送费</View>
          <Price price={0} size="normal" thousands />
        </View>
        <View className="h-[90rpx] flex-align justify-between border-bottom">
          <View className="text-[28rpx] color-[#232323]">合计</View>
          <Price price={10} size="normal" thousands />
        </View>
      </View>
      {/* 订单信息 结束 */}

      {/* 去支付 开始 */}
      <View className="w-100% h-[100rpx] fixed bottom-0 flex bg-[#fff] z-[899] shadow-[0_10rpx_20rpx_rgba(0,0,0,.2)]">
        <View className="flex-[0_0_50%] h-100% flex-align">
          <View className="text-[30rpx] ml-[30rpx]">
            合计：
            <Price price={10} size="large" thousands />
          </View>
        </View>
        <View className="flex-[0_0_50%] h-100% flex-center">
          <View className="w-80% h-[70rpx] flex-center bg-[#157658] color-[#fff] text-[30rpx] rounded-[100rpx]">
            去支付
          </View>
        </View>
      </View>
      {/* 去支付 结束 */}

      {/* 优惠券弹出层 开始 */}
      <Popup
        visible={isShowCouponPopup}
        style={{ height: '70%', backgroundColor: '#f5f5f5' }}
        position="bottom"
        onClose={() => setIsShowCouponPopup(false)}
      >
        <View className="w-full h-100%">
          <View className="w-full h-[100rpx] mb-[20rpx] flex-center text-[32rpx] font-bold bg-[#fff]">
            选择优惠券
          </View>
          <View className="w-full h-[100rpx] flex flex-row bg-[#fff]">
            {couponStatus.map((item) => (
              <View
                key={item.type}
                className="flex-1 flex-center flex-col"
                onClick={() => setCouponStateCurrent(item.type)}
              >
                <View
                  className={`'lh-[76rpx] text-[30rpx]' ${
                    item.type === couponStateCurrent ? 'color-[#157658]' : 'color-[#333]'
                  }`}
                >
                  {item.title}
                </View>
                <View
                  className={`'w-[60rpx] h-[4rpx]' ${
                    item.type === couponStateCurrent ? 'bg-[#157658]' : 'bg-[#fff]'
                  }`}
                ></View>
              </View>
            ))}
          </View>
          <View className="h-[calc(100%-220rpx)]">
            <ConfigProvider
              theme={{
                nutuiGray1: '#f5f5f5',
              }}
            >
              <Empty description="无优惠券" status="empty" />
            </ConfigProvider>
          </View>
        </View>
      </Popup>
      {/* 优惠券弹出层 结束 */}
    </BasicLayout>
  );
};

export default PayOrder;
