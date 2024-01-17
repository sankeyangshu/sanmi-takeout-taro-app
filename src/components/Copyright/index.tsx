import { Image } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';

const Copyright = () => {
  return (
    <View className="flex-center flex-col p-[50rpx]">
      <View className="flex-align color-[#999]">
        <Image
          src="https://avatars.githubusercontent.com/u/64878070?v=4"
          width="36rpx"
          height="36rpx"
          radius="10rpx"
        />
        <View className="ml-[10rpx] text-[24rpx]">sankeyangshu</View>
      </View>
      <View className="mt-[10rpx] text-[24rpx] color-[#999]">v0.0.1</View>
      <View className="mt-[10rpx] text-[24rpx] color-[#999]">
        Copyright © 2023-2024 | Apache License 2.0
      </View>
    </View>
  );
};
export default Copyright;
