import { Copy, HeartFill, Package } from '@nutui/icons-react-taro';
import { Image, Price } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import coffee from '@/assets/images/coffee.png';
import BasicLayout from '@/components/BasicLayout';

const OrderDetail = () => {
  /**
   * 复制订单号
   * @param data 订单号
   */
  const onCopyBillNo = (data: string) => {
    Taro.setClipboardData({
      data,
    });
  };

  // TEST: 订单状态 0-等待买家付款 1-买家已付款 2-卖家已发货 3-交易成功 4-交易关闭
  const [orderStatus] = useState(3);

  return (
    <BasicLayout>
      {/* 订单状态 开始 */}
      <View className="h-[160rpx] mb-[24rpx] py-[20rpx] px-[40rpx] flex-align justify-between bg-[#157658] box-border">
        {orderStatus === 0 && (
          <>
            <View className="flex flex-col color-[#fff]">
              <View className="text-[32rpx]">等待买家付款</View>
              <View className="h-[30rpx] mt-[10rpx] text-[24rpx] flex-align flex-row">
                请在5分钟内完成付款
              </View>
            </View>
            <View className="i-local-payment text-[50rpx] color-[#fff]" />
          </>
        )}
        {orderStatus === 1 && (
          <>
            <View className="flex flex-col color-[#fff]">
              <View className="text-[32rpx]">付款成功，待配送</View>
              <View className="h-[30rpx] mt-[10rpx] text-[24rpx] flex-align flex-row">
                商家正在打包
              </View>
            </View>
            <Package size="50rpx" color="#fff" />
          </>
        )}
        {orderStatus === 2 && (
          <>
            <View className="flex flex-col color-[#fff]">
              <View className="text-[32rpx]">开始配送</View>
              <View className="h-[30rpx] mt-[10rpx] text-[24rpx] flex-align flex-row">
                骑手正在配送中
              </View>
            </View>
            <View className="i-local-delivery text-[50rpx] color-[#fff]" />
          </>
        )}
        {orderStatus === 3 && (
          <>
            <View className="flex flex-col color-[#fff]">
              <View className="text-[32rpx]">订单完成</View>
              <View className="h-[30rpx] mt-[10rpx] text-[24rpx] flex-align flex-row">
                谢谢惠顾，感谢您的下次光临
              </View>
            </View>
            <View className="i-local-order-approve text-[50rpx] color-[#fff]" />
          </>
        )}
      </View>
      {/* 订单状态 结束 */}

      {/* 商品信息 开始 */}
      <View className="flex flex-col mx-[24rpx] mb-[24rpx] py-[24rpx] px-[16rpx] bg-[#fff] rounded-2">
        <View className="w-full flex justify-between pb-[24rpx] border-bottom overflow-hidden">
          <View className="w-80% text-[30rpx] font-bold color-[#333333] truncate">
            店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称
          </View>
          <View className="flex-center">
            <HeartFill size="32rpx" color="#157658" />
          </View>
        </View>
        <View className="w-full py-[24rpx] border-bottom">
          <View className="flex mb-[20rpx] ">
            <Image src={coffee} width="60" height="60" radius="6rpx" lazyLoad mode="aspectFill" />
            <View className="flex-1 flex flex-col justify-between ml-[20rpx] overflow-hidden">
              <View className="text-[26rpx] font-bold color-[#343434]">商品标题</View>
              <View className="text-[24rpx] color-[#999999] truncate">商品描述</View>
              <View className="flex-align justify-between">
                <View className="text-[24rpx] color-[#999999]">x3</View>
                <Price price={10} size="normal" thousands />
              </View>
            </View>
          </View>
        </View>
        <View className="w-full pt-[24rpx]">
          <View className="h-[66rpx] flex-align justify-between text-[28rpx]">
            <View className="color-[#999999]">商品总价</View>
            <View className="color-[#000]">￥10</View>
          </View>
          <View className="h-[66rpx] flex-align justify-between text-[28rpx]">
            <View className="color-[#999999]">配送费</View>
            <View className="color-[#000]">￥0</View>
          </View>
          <View className="h-[66rpx] flex-align justify-between text-[28rpx]">
            <View className="color-[#999999]">优惠券</View>
            <View className="color-[#000]">￥0</View>
          </View>
          <View className="h-[66rpx] flex-align justify-end">
            <View className="text-[28rpx] color-[#000]">
              实付款 <Price price={10} size="large" thousands />
            </View>
          </View>
        </View>
      </View>
      {/* 商品信息 结束 */}

      {/* 订单信息 开始 */}
      <View className="flex flex-col mx-[24rpx] mb-[24rpx] py-[24rpx] px-[16rpx] bg-[#fff] rounded-2">
        <View className="w-full pb-[24rpx] border-bottom">
          <View className="h-[66rpx] flex-align justify-between text-[28rpx]">
            <View className="color-[#999999]">期望时间</View>
            <View className="color-[#000]">立即配送</View>
          </View>
          <View className="h-[66rpx] flex-align justify-between text-[28rpx] overflow-hidden">
            <View className="color-[#999999]">配送地址</View>
            <View className="w-70% color-[#000] truncate text-end">这是一个地址哈哈哈哈</View>
          </View>
          <View className="h-[66rpx] flex-align justify-between text-[28rpx]">
            <View className="color-[#999999]">配送服务</View>
            <View className="color-[#000]">骑手配送</View>
          </View>
        </View>
        <View className="w-full pt-[24rpx]">
          <View className="h-[66rpx] flex-align justify-between text-[28rpx]">
            <View className="color-[#999999]">订单号码</View>
            <View className="flex-align color-[#000]">
              <Text className="mr-[20rpx]">123456789</Text>
              <Copy size="30rpx" onClick={() => onCopyBillNo('123456789')} />
            </View>
          </View>
          <View className="h-[66rpx] flex-align justify-between text-[28rpx]">
            <View className="color-[#999999]">下单时间</View>
            <View className="color-[#000]">2024-01-09 12:00:00</View>
          </View>
          <View className="h-[66rpx] flex-align justify-between text-[28rpx]">
            <View className="color-[#999999]">支付方式</View>
            <View className="color-[#000]">在线支付</View>
          </View>
        </View>
      </View>
      {/* 订单信息 结束 */}

      <View className="w-full my-[24rpx] flex-center text-[28rpx]">到底了~</View>
    </BasicLayout>
  );
};

export default OrderDetail;
