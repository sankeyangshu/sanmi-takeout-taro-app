import { ArrowRight, Heart, Location, Order, Refund, Tips } from '@nutui/icons-react-taro';
import { Avatar } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import BasicLayout from '@/components/BasicLayout';
import Copyright from '@/components/Copyright';

const Mine = () => {
  // 关于我们
  const onClickAboutUs = () => {
    Taro.navigateTo({ url: '/pages/AboutUs/index' });
  };

  // 我的订单
  const onClickMyOrder = () => {
    Taro.navigateTo({ url: '/pages/Order/index' });
  };

  // 我的优惠券
  const onClickMyCoupon = () => {
    Taro.navigateTo({ url: '/pages/MyCoupon/index' });
  };

  // 我的收藏
  const onClickMyCollect = () => {
    Taro.navigateTo({ url: '/pages/MyCollect/index' });
  };

  // 我的收货地址
  const onClickMyAddress = () => {
    Taro.navigateTo({ url: '/pages/MyAddress/index' });
  };

  return (
    <BasicLayout>
      {/* 用户信息 开始 */}
      <View className="w-full px-[40rpx] pt-[140rpx] pb-[40rpx] box-border bg-gradient-to-tl from-[#157658] to-[#156c76]">
        <View className="w-full flex flex-row">
          <Avatar size="large" src="https://avatars.githubusercontent.com/u/64878070?v=4" />
          <View className="flex-1 ml-[30rpx] flex-justify flex-col color-[#fff] overflow-hidden">
            <View className="text-[32rpx] truncate">三棵杨树</View>
            <View className="mt-[10rpx] text-[24rpx]">从来没有真正的绝境，只有心灵的迷途</View>
          </View>
        </View>
        <View className="w-full h-[120rpx] mt-[20rpx] flex flex-row">
          <View
            className="w-[49%] h-full flex-center flex-col color-[#fff]"
            onClick={onClickMyCoupon}
          >
            <View className="text-[32rpx]">10</View>
            <View className="text-[28rpx] mt-[10rpx]">优惠券</View>
          </View>
          <View className="w-0 h-[50rpx] m-a border-r-[2rpx] border-r-solid border-r-[#fff]"></View>
          <View
            className="w-[49%] h-full flex-center flex-col color-[#fff]"
            onClick={onClickAboutUs}
          >
            <Tips size="32rpx" />
            <View className="text-[28rpx] mt-[10rpx]">关于我们</View>
          </View>
        </View>
      </View>
      {/* 用户信息 结束 */}

      {/* 菜单 开始 */}
      <View className="mx-[24rpx] my-[24rpx] px-[20rpx] bg-[#fff] rounded-2">
        <View className="flex-center w-full h-[110rpx] border-bottom" onClick={onClickMyOrder}>
          <View className="flex-[0_0_8%]">
            <Order size="40rpx" />
          </View>
          <View className="flex-[0_0_82%] flex-align text-[32rpx]">全部订单</View>
          <View className="flex-[0_0_10%] flex justify-end">
            <ArrowRight size="30rpx" />
          </View>
        </View>
        <View className="flex-center w-full h-[110rpx] border-bottom" onClick={onClickMyCoupon}>
          <View className="flex-[0_0_8%]">
            <Refund size="40rpx" />
          </View>
          <View className="flex-[0_0_82%] flex-align text-[32rpx]">我的优惠</View>
          <View className="flex-[0_0_10%] flex justify-end">
            <ArrowRight size="30rpx" />
          </View>
        </View>
        <View className="flex-center w-full h-[110rpx] border-bottom" onClick={onClickMyCollect}>
          <View className="flex-[0_0_8%]">
            <Heart size="40rpx" />
          </View>
          <View className="flex-[0_0_82%] flex-align text-[32rpx]">我的收藏</View>
          <View className="flex-[0_0_10%] flex justify-end">
            <ArrowRight size="30rpx" />
          </View>
        </View>
        <View className="flex-center w-full h-[110rpx]" onClick={onClickMyAddress}>
          <View className="flex-[0_0_8%]">
            <Location size="40rpx" />
          </View>
          <View className="flex-[0_0_82%] flex-align text-[32rpx]">我的地址</View>
          <View className="flex-[0_0_10%] flex justify-end">
            <ArrowRight size="30rpx" />
          </View>
        </View>
      </View>
      {/* 菜单 结束 */}

      {/* 版权信息 开始 */}
      <Copyright />
      {/* 版权信息 结束 */}
    </BasicLayout>
  );
};

export default Mine;
