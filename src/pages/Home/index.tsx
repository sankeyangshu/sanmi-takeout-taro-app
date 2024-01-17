import { Avatar, ConfigProvider, Image, SearchBar } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro, { useLoad } from '@tarojs/taro';
import { useState } from 'react';
import coffee from '@/assets/images/coffee.png';
import food from '@/assets/images/food.png';
import hamburg from '@/assets/images/hamburg.png';
import lightFood from '@/assets/images/light-food.png';
import BasicLayout from '@/components/BasicLayout';
import ShopCard from '@/components/ShopCard';
import useNavBarInfo from '@/hooks/useNavBarInfo';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  // 获取导航栏信息
  const { statusBarHeight, titelBarWidth, titleBarHeight } = useNavBarInfo();

  // 菜单列表
  const menuList = [
    {
      id: 'coffee',
      name: '奶茶饮品',
      icon: coffee,
    },
    {
      id: 'hamburg',
      name: '炸鸡汉堡',
      icon: hamburg,
    },
    {
      id: 'lightFood',
      name: '轻食简餐',
      icon: lightFood,
    },
    {
      id: 'food',
      name: '特色美味',
      icon: food,
    },
  ];

  // 排序列表
  const sortList = [
    {
      id: 'nearby',
      name: '附近商户',
    },
    {
      id: 'sales',
      name: '销量',
    },
    {
      id: 'speed',
      name: '速度',
    },
    {
      id: 'price',
      name: '配送费',
    },
  ];
  const [activeSortId, setActiveSortId] = useState('nearby');

  return (
    <BasicLayout>
      {/* 导航栏 开始 */}
      <View className="bg-gradient-to-r from-[#157658] to-[#156c76]">
        <View style={{ height: statusBarHeight }}></View>
        <View
          className="flex-align flex-row"
          style={{ width: titelBarWidth, height: titleBarHeight }}
        >
          <View className="ml-[20rpx]">
            <Avatar
              size="small"
              src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
            />
          </View>
          <View className="ml-[20rpx] text-[32rpx] color-white truncate">三棵杨树</View>
        </View>
      </View>
      {/* 导航栏 结束 */}

      {/* 搜索 开始 */}
      <View className="sticky top-0 z-2">
        <View className="py-[14rpx] bg-gradient-to-r from-[#157658] to-[#156c76]">
          <ConfigProvider
            theme={{
              nutuiSearchbarBackground: 'linear-gradient(100deg, #157658, #156c76);',
            }}
          >
            <SearchBar shape="round" />
          </ConfigProvider>
        </View>
      </View>
      {/* 搜索 结束 */}

      {/* 宫格 开始 */}
      <View className="flex justify-between flex-row mx-[32rpx] mt-[24rpx] py-[24rpx] px-[16rpx] bg-[#fff] rounded-2">
        {menuList.map((item) => (
          <View
            key={item.id}
            className="flex-center flex-col"
            onClick={() => Taro.showToast({ title: item.name, icon: 'none' })}
          >
            <Image src={item.icon} width="40" height="40" />
            <View className="w-[120rpx] text-[28rpx] mt-[12rpx] text-gray-700 py-[4rpx] truncate">
              {item.name}
            </View>
          </View>
        ))}
      </View>
      {/* 宫格 结束 */}

      {/* 排序 开始 */}
      <View className="flex flex-row mx-[32rpx] my-[24rpx] text-gray-700 text-[28rpx]">
        {sortList.map((item) => (
          <View
            key={item.id}
            className={`'mr-[32rpx]' ${activeSortId === item.id && 'font-bold'}`}
            onClick={() => setActiveSortId(item.id)}
          >
            {item.name}
          </View>
        ))}
      </View>
      {/* 排序 结束 */}

      {/* 店铺列表 开始 */}
      <ShopCard />
      {/* 店铺列表 结束 */}
    </BasicLayout>
  );
}
