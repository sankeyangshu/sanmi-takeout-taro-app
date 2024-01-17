import { View } from '@tarojs/components';
import BasicLayout from '@/components/BasicLayout';
import ShopCard from '@/components/ShopCard';

const MyCollect = () => {
  return (
    <BasicLayout>
      <View className="mt-[24rpx]">
        <ShopCard />
      </View>
    </BasicLayout>
  );
};

export default MyCollect;
