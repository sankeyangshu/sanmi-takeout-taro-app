import { Location, StarFill } from '@nutui/icons-react-taro';
import { Image } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import coffee from '@/assets/images/coffee.png';

const ShopCard = () => {
  // 店铺详情
  const onShopDetail = () => {
    Taro.navigateTo({
      url: '/pages/ShopDetail/index',
    });
  };

  return (
    <View
      className="flex flex-col mx-[32rpx] mb-[24rpx] py-[24rpx] px-[16rpx] bg-[#fff] rounded-2"
      onClick={onShopDetail}
    >
      <View className="flex flex-row">
        <View>
          <Image src={coffee} width="100" height="100" radius="10rpx" />
        </View>
        <View className="ml-[16rpx] flex justify-between flex-col flex-1 overflow-hidden color-[#999999]">
          <View className="text-[28rpx] font-bold color-[#333333] truncate">面霸</View>
          <View className="flex justify-between">
            <View className="flex-align flex-row">
              <StarFill color="#157658" size="20" />
              <Text className="ml-[6rpx] text-[26rpx] color-[#157658]">4.5</Text>
              <Text className="ml-[20rpx] text-[26rpx]">月售 500</Text>
            </View>
            <View className="flex-align flex-row">
              <Location size="26rpx" />
              <Text className="ml-[8rpx] text-[26rpx]">3.5km</Text>
            </View>
          </View>
          <View className="flex-align flex-row">
            <Text className="text-[26rpx]">起送 ¥20</Text>
            <Text className="ml-[20rpx] text-[26rpx]">配送 ¥5</Text>
          </View>
          <View className="color-[#fff]">
            <Text className="bg-[#157658] rounded-4 px-[10rpx] text-[26rpx]">商家介绍</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ShopCard;
