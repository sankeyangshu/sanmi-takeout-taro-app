import { Empty } from '@nutui/nutui-react-taro';
import {
  CommonEventFunction,
  Swiper,
  SwiperItem,
  SwiperProps,
  Text,
  View,
} from '@tarojs/components';
import { useState } from 'react';
import BasicLayout from '@/components/BasicLayout';
import useNavBarInfo from '@/hooks/useNavBarInfo';

const MyCoupon = () => {
  // 获取状态栏信息
  const { contentHeight } = useNavBarInfo();

  // 标签列表
  const tabList = ['未使用', '已使用', '已过期'];
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

  // 我的优惠券列表
  const [myCouponList] = useState([]);

  return (
    <BasicLayout>
      <View className="w-full">
        {/* 标签 开始 */}
        <View className="w-full h-[80rpx] flex-center bg-[#fff] border-bottom z-10">
          {tabList.map((item, index) => (
            <View
              key={index}
              className="w-33% h-full flex-center"
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
            {/* 未使用 开始 */}
            <SwiperItem>
              {/* 优惠券 开始 */}
              {myCouponList.length > 0 ? (
                <View className="mx-[24rpx] mt-[24rpx] px-[24rpx] flex-justify flex-col bg-[#fff] rounded-2">
                  <View className="py-[22rpx] flex-align">
                    <View className="flex-[0_0_20%] flex-center text-[36rpx] color-[#157858]">
                      10元
                    </View>
                    <View className="flex-[0_0_80%] flex-justify flex-col overflow-hidden">
                      <View className="text-[30rpx] color-[#343434] truncate">优惠券名称</View>
                      <View className="pt-[10rpx] text-[26rpx] color-[#999]">满20元可用</View>
                    </View>
                  </View>
                  <View className="py-[22rpx] flex-align text-[24rpx] color-[#999] border-t-[2rpx] border-t-dashed border-t-[#f5f5f5]">
                    <View className="flex-[0_0_60%] flex-align">2024-01-12 12:00前有效</View>
                    <View className="flex-[0_0_40%] pr-[20rpx] flex-align justify-end">
                      全场商品可用
                    </View>
                  </View>
                </View>
              ) : (
                <View className="w-full h-full flex-center bg-[#fff]">
                  <Empty status="empty" description="暂无优惠券" />
                </View>
              )}
              {/* 优惠券 结束 */}
            </SwiperItem>
            {/* 未使用 结束 */}

            {/* 已使用 开始 */}
            <SwiperItem>1</SwiperItem>
            {/* 已使用 结束 */}

            {/* 已过期 开始 */}
            <SwiperItem>2</SwiperItem>
            {/* 已过期 结束 */}
          </Swiper>
        </View>
      </View>
    </BasicLayout>
  );
};

export default MyCoupon;
