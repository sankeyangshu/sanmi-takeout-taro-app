import { ConfigProvider, Empty, SearchBar } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useState } from 'react';
import BasicLayout from '@/components/BasicLayout';
import ShopCard from '@/components/ShopCard';
import useNavBarInfo from '@/hooks/useNavBarInfo';

const ShopList = () => {
  // 获取状态栏信息
  const { contentHeight } = useNavBarInfo();

  // 排序列表
  const sortList = [
    {
      id: 'default',
      name: '默认排序',
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
  const [activeSortId, setActiveSortId] = useState('default');

  // 店铺列表
  const [shopList] = useState([]);

  // 是否显示搜索框
  const [isShowSearch] = useState(false);

  return (
    <BasicLayout>
      {/* 搜索框 开始 */}
      {isShowSearch && (
        <View className="sticky top-0 z-2">
          <ConfigProvider
            theme={{
              nutuiSearchbarPadding: '10px 16px',
            }}
          >
            <SearchBar shape="round" />
          </ConfigProvider>
        </View>
      )}
      {/* 搜索框 结束 */}

      {/* 排序 开始 */}
      <View className={`'flex flex-row mx-[32rpx] mb-[20rpx]' ${!isShowSearch && 'mt-[20rpx]'}`}>
        {sortList.map((item) => (
          <View
            key={item.id}
            className={`'mr-[32rpx] pb-[10rpx] text-gray-700 text-[28rpx] border-b-[6rpx] border-b-solid' ${
              activeSortId === item.id
                ? 'font-bold color-[#157658] border-b-[#157658]'
                : 'color-[#666666] border-b-[#f5f5f5]'
            }`}
            onClick={() => setActiveSortId(item.id)}
          >
            {item.name}
          </View>
        ))}
      </View>
      {/* 排序 结束 */}

      {/* 店铺列表 开始 */}
      <View className="bg-[#fff]" style={{ height: `${contentHeight - 80}px` }}>
        {shopList.length > 0 ? (
          <ShopCard />
        ) : (
          <View className="w-full h-full flex-center">
            <Empty status="empty" description="暂无店铺" />
          </View>
        )}
      </View>
      {/* 店铺列表 结束 */}
    </BasicLayout>
  );
};

export default ShopList;
