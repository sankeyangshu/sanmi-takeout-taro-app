import { ArrowRight } from '@nutui/icons-react-taro';
import { Button, ConfigProvider, Image, Price, Tag } from '@nutui/nutui-react-taro';
import { ScrollView, Text, View } from '@tarojs/components';
import coffee from '@/assets/images/coffee.png';
import BasicLayout from '@/components/BasicLayout';

const Order = () => {
  // TODO: 测试数据-订单商品数据
  const goodsList = [
    {
      src: coffee,
      name: '这是商品1',
    },
    {
      src: coffee,
      name: '这是商品2',
    },
    {
      src: coffee,
      name: '这是商品3',
    },
    {
      src: coffee,
      name: '这是商品4',
    },
    {
      src: coffee,
      name: '这是商品5',
    },
  ];

  return (
    <BasicLayout>
      <View className="flex flex-col mx-[32rpx] mb-[24rpx] py-[24rpx] px-[16rpx] bg-[#fff] rounded-2">
        <View className="flex flex-row">
          <Image src={coffee} width="40" height="40" radius="10rpx" />
          <View className="flex-1 flex justify-between flex-col ml-[20rpx] overflow-hidden">
            <View className="flex-align justify-between">
              <View className="w-76% flex-align">
                <Text className="w-full text-[28rpx] font-bold color-[#333333] truncate">
                  店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称
                </Text>
                <ArrowRight size="30rpx" color="#333333" />
              </View>
              <View className="ml-[10rpx] text-[28rpx] color-[#666]">已完成</View>
            </View>
            <View className="flex flex-row">
              <View className="mr-[10rpx]">
                <Tag background="#157658" plain>
                  标签
                </Tag>
              </View>
              <View className="mr-[10rpx]">
                <Tag background="#656565">已下线</Tag>
              </View>
            </View>
          </View>
        </View>
        <View className="my-[20rpx] flex flex-row">
          <View className="w-80%">
            {goodsList.length > 1 ? (
              <ScrollView scrollX scrollWithAnimation className="w-full whitespace-nowrap">
                {goodsList.map((item, index) => (
                  <View key={index} className="w-[200rpx] mr-[20rpx] overflow-hidden inline-block">
                    <Image src={item.src} width="100%" height="75" radius="10rpx" />
                    <View className="mt-[20rpx] text-[28rpx] truncate">{item.name}</View>
                  </View>
                ))}
              </ScrollView>
            ) : (
              <View className="flex flex-row">
                <Image src={coffee} width="100" height="75" radius="10rpx" />
                <View className="flex-1 flex-center ml-[20rpx] text-[28rpx] overflow-hidden">
                  <Text className="line-clamp-2 text-ellipsis">这是商品的名字哈哈哈哈</Text>
                </View>
              </View>
            )}
          </View>
          <View className="w-20% flex-center flex-col">
            <Price price={10} size="normal" thousands />
            <View className="mt-[8rpx] text-[26rpx] color-[#787878]">
              共<Text className="mx-[8rpx]">1</Text>件
            </View>
          </View>
        </View>
        <View className="flex justify-end">
          <ConfigProvider
            theme={{
              nutuiButtonSquareBorderRadius: '10rpx',
            }}
          >
            <Button shape="square" size="small" color="#157658">
              再来一单
            </Button>
          </ConfigProvider>
        </View>
      </View>
    </BasicLayout>
  );
};

export default Order;
