import { ArrowRight, Heart, Location, Order, Refund } from '@nutui/icons-react-taro';
import { Avatar } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import BasicLayout from '@/components/BasicLayout';

const Mine = () => {
  // 我的优惠券
  const onClickMyCoupon = () => {
    Taro.navigateTo({ url: '/pages/MyCoupon/index' });
  };

  return (
    <BasicLayout>
      {/* 用户信息 开始 */}
      <View className="w-full px-[40rpx] pt-[140rpx] pb-[40rpx] box-border bg-gradient-to-tl from-[#157658] to-[#156c76]">
        <View className="w-full flex flex-row">
          <Avatar
            size="large"
            src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          />
          <View className="flex-1 ml-[30rpx] flex-justify flex-col color-[#fff] overflow-hidden">
            <View className="text-[32rpx] truncate">用户昵称</View>
            <View className="mt-[10rpx] text-[24rpx]">这是用户的个性签名</View>
          </View>
        </View>
        <View className="w-full h-[120rpx] mt-[20rpx] flex flex-row">
          <View className="w-[49%] h-full flex-center flex-col color-[#fff]">
            <View className="text-[32rpx]">10</View>
            <View className="text-[28rpx]">优惠券</View>
          </View>
          <View className="w-0 h-[50rpx] m-a border-r-[2rpx] border-r-solid border-r-[#fff]"></View>
          <View className="w-[49%] h-full flex-center flex-col color-[#fff]">
            <View className="text-[32rpx]">10</View>
            <View className="text-[28rpx]">余额</View>
          </View>
        </View>
      </View>
      {/* 用户信息 结束 */}

      <View className="mx-[24rpx] my-[24rpx] px-[20rpx] bg-[#fff] rounded-2">
        <View className="flex-center w-full h-[110rpx] border-bottom">
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
        <View className="flex-center w-full h-[110rpx] border-bottom">
          <View className="flex-[0_0_8%]">
            <Heart size="40rpx" />
          </View>
          <View className="flex-[0_0_82%] flex-align text-[32rpx]">我的收藏</View>
          <View className="flex-[0_0_10%] flex justify-end">
            <ArrowRight size="30rpx" />
          </View>
        </View>
        <View className="flex-center w-full h-[110rpx]">
          <View className="flex-[0_0_8%]">
            <Location size="40rpx" />
          </View>
          <View className="flex-[0_0_82%] flex-align text-[32rpx]">我的地址</View>
          <View className="flex-[0_0_10%] flex justify-end">
            <ArrowRight size="30rpx" />
          </View>
        </View>
      </View>
    </BasicLayout>
  );
};

export default Mine;
