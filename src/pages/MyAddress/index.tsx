import { Add, Edit } from '@nutui/icons-react-taro';
import { Empty, Tag } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useState } from 'react';
import BasicLayout from '@/components/BasicLayout';
import useNavBarInfo from '@/hooks/useNavBarInfo';

const MyAddress = () => {
  // 获取状态栏信息
  const { contentHeight } = useNavBarInfo();

  // 我的收货地址列表
  const [myAddressList] = useState([]);

  return (
    <BasicLayout>
      <View className="w-full bg-[#fff]" style={{ height: contentHeight }}>
        {myAddressList.length > 0 ? (
          <View className="px-[24rpx] pt-[20rpx]">
            <View className="flex-align font-bold text-[34rpx] color-[#343434]">
              <View className="mr-[30rpx]">
                三棵杨树<Text className="ml-[30rpx]">18212341234</Text>
              </View>
              <Tag background="#157658">默认</Tag>
            </View>
            <View className="mt-[20rpx] pb-[20rpx] flex-align justify-between overflow-hidden border-bottom">
              <View className="flex-[0_0_80%] text-[28rpx] color-[#999] truncate">
                这是用户地址哈哈哈哈
              </View>
              <Edit size="40rpx" color="#999" />
            </View>
          </View>
        ) : (
          <Empty status="empty" description="暂无地址" />
        )}
      </View>
      <View className="fixed left-0 right-0 bottom-[60rpx] w-[600rpx] h-[80rpx] mx-auto rounded-[60rpx] bg-[#157658] color-[#fff] flex-center z-[899]">
        <Add size="30rpx" color="#fff" />
        <Text className="ml-[10rpx] text-[30rpx]">新增地址</Text>
      </View>
    </BasicLayout>
  );
};

export default MyAddress;
