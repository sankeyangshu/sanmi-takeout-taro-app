import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import BasicLayout from '@/components/BasicLayout';
import Copyright from '@/components/Copyright';

const AboutUs = () => {
  // 作者地址
  const [sankeyangshu] = useState('https://sankeyangshu.top');

  // 项目地址
  const [appUrlGit] = useState('https://github.com/sankeyangshu/sanmi-takeout-taro-app');

  /**
   * 复制
   * @param {string} data 要复制的内容
   */
  const onClickCopy = (data: string) => {
    Taro.setClipboardData({
      data,
    });
  };

  return (
    <BasicLayout>
      <View className="w-full p-[30rpx] flex-align flex-col box-border">
        {/* 作者介绍 开始 */}
        <View className="w-full py-[40rpx] flex-center bg-[#fff] box-border">
          <View className="flex items-start flex-col">
            <View className="mb-[40rpx] flex-align flex-row relative">
              <Text className="text-[32rpx] font-bold color-[#333] z-99">作者</Text>
              <View className="absolute top-[25rpx] w-[64rpx] h-[20rpx] bg-[#DCEBE6]"></View>
              <Text className="ml-[40rpx] text-[28rpx] color-[#157658]">三棵杨树</Text>
            </View>
            <View className="mb-[40rpx] flex-align flex-row relative">
              <Text className="text-[32rpx] font-bold color-[#333] z-99">设计</Text>
              <View className="absolute top-[25rpx] w-[64rpx] h-[20rpx] bg-[#DCEBE6]"></View>
              <Text className="ml-[40rpx] text-[28rpx] color-[#666]">三棵杨树</Text>
            </View>
            <View className="flex-align flex-row relative">
              <Text className="text-[32rpx] font-bold color-[#333] z-99">致谢</Text>
              <View className="absolute top-[25rpx] w-[64rpx] h-[20rpx] bg-[#DCEBE6]"></View>
              <Text className="ml-[40rpx] text-[28rpx] color-[#666]">Taro、NutUI-React</Text>
            </View>
          </View>
        </View>
        {/* 作者介绍 结束 */}

        {/* 项目介绍 开始 */}
        <View className="w-full mt-[20rpx] p-[40rpx] bg-[#fff] box-border">
          <View className="pb-[40rpx] flex justify-between flex-row border-b-[2rpx] border-b-solid border-b-[#f3f3f3]">
            <View className="flex flex-col">
              <Text className="mb-[10rpx] text-[22rpx] color-[#999]">个人主页</Text>
              <Text className="text-[28rpx] color-[#157658]">{sankeyangshu}</Text>
            </View>
            <View className="pl-[14rpx] border-l-[2rpx] border-l-dashed border-l-[#157658]">
              <View
                className="w-[50rpx] h-[80rpx] flex-center flex-col text-[20rpx] color-[#157658] bg-[#DCEBE6]"
                onClick={() => onClickCopy(sankeyangshu)}
              >
                <Text>复</Text>
                <Text>制</Text>
              </View>
            </View>
          </View>
          <View className="pt-[40rpx] flex justify-between flex-row">
            <View className="w-[80%] flex flex-col overflow-hidden">
              <Text className="mb-[10rpx] text-[22rpx] color-[#999]">项目地址</Text>
              <Text className="text-[28rpx] color-[#157658] truncate">{appUrlGit}</Text>
            </View>
            <View className="pl-[14rpx] border-l-[2rpx] border-l-dashed border-l-[#157658]">
              <View
                className="w-[50rpx] h-[80rpx] flex-center flex-col text-[20rpx] color-[#157658] bg-[#DCEBE6]"
                onClick={() => onClickCopy(appUrlGit)}
              >
                <Text>复</Text>
                <Text>制</Text>
              </View>
            </View>
          </View>
        </View>
        {/* 项目介绍 结束 */}
      </View>

      {/* 版权信息 开始 */}
      <Copyright />
      {/* 版权信息 结束 */}
    </BasicLayout>
  );
};

export default AboutUs;
