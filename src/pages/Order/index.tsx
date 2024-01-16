import { ArrowRight } from '@nutui/icons-react-taro';
import { Button, ConfigProvider, Empty, Image, Price, Tag } from '@nutui/nutui-react-taro';
import {
  CommonEventFunction,
  ScrollView,
  Swiper,
  SwiperItem,
  SwiperProps,
  Text,
  View,
} from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import coffee from '@/assets/images/coffee.png';
import BasicLayout from '@/components/BasicLayout';
import useNavBarInfo from '@/hooks/useNavBarInfo';

const Order = () => {
  // 获取状态栏信息
  const { contentHeight } = useNavBarInfo();

  // tab标签列表
  const tabList = ['全部', '待付款', '待配送', '待收货', '已完成'];
  // 当前选中的标签
  const [tabIndex, setTabIndex] = useState(0);

  // 滑动属性
  const [transtionTime] = useState(100);

  /**
   * 切换tab导航栏
   * @param {number} value 选中的导航下标
   */
  const onChangeTabs = (value: number) => {
    setTabIndex(value);
  };
  const onSwiperAnimationFinish: CommonEventFunction<SwiperProps.onChangeEventDetail> = ({
    detail: { current },
  }) => {
    onChangeTabs(current);
  };

  // TEST: 测试数据-订单数据
  const [orderList] = useState([1]);

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

  // 订单详情
  const onOrderDetail = () => {
    Taro.navigateTo({ url: '/pages/OrderDetail/index' });
  };

  return (
    <BasicLayout>
      {/* 标签 开始 */}
      <View className="w-full h-[80rpx] flex-center bg-[#fff] border-bottom z-10">
        {tabList.map((item, index) => (
          <View
            key={index}
            className="w-25% h-full flex-center"
            onClick={() => onChangeTabs(index)}
          >
            <Text
              className={`'text-[32rpx] py-[14rpx] border-b-[6rpx] border-b-solid' ${
                tabIndex === index
                  ? 'color-[#157658] border-b-[#157658]'
                  : 'color-[#666666] border-b-[#ffffff]'
              }`}
              style={{ transition: `${transtionTime}ms` }}
            >
              {item}
            </Text>
          </View>
        ))}
      </View>
      {/* 标签 结束 */}

      <View style={{ height: `${contentHeight - 48}px` }}>
        <Swiper
          current={tabIndex}
          duration={transtionTime}
          onAnimationFinish={onSwiperAnimationFinish}
          className="h-100%"
        >
          {/* 全部 开始 */}
          <SwiperItem>
            {orderList.length > 0 ? (
              <View className="flex flex-col mx-[32rpx] mt-[24rpx] py-[24rpx] px-[16rpx] bg-[#fff] rounded-2">
                {/* 店铺名称 开始 */}
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
                {/* 店铺名称 结束 */}

                {/* 商品内容 开始 */}
                <View className="my-[20rpx] flex flex-row" onClick={onOrderDetail}>
                  <View className="w-80%">
                    {goodsList.length > 1 ? (
                      <ScrollView scrollX scrollWithAnimation className="w-full whitespace-nowrap">
                        {goodsList.map((item, index) => (
                          <View
                            key={index}
                            className="w-[200rpx] mr-[20rpx] overflow-hidden inline-block"
                          >
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
                {/* 商品内容 结束 */}

                {/* 操作按钮 开始 */}
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
                {/* 操作按钮 结束 */}
              </View>
            ) : (
              <View className="w-full h-full flex-center bg-[#fff]">
                <Empty status="empty" description="暂无优惠券" />
              </View>
            )}
          </SwiperItem>
          {/* 全部 结束 */}

          {/* 待付款 开始 */}
          <SwiperItem>待付款</SwiperItem>
          {/* 待付款 结束 */}

          {/* 待配送 开始 */}
          <SwiperItem>代配送</SwiperItem>
          {/* 待配送 结束 */}

          {/* 待收货 开始 */}
          <SwiperItem>待收货</SwiperItem>
          {/* 待收货 结束 */}

          {/* 已完成 开始 */}
          <SwiperItem>已完成</SwiperItem>
          {/* 已完成 结束 */}
        </Swiper>
      </View>
    </BasicLayout>
  );
};

export default Order;
