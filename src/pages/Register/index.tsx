import { Checked, CheckNormal, Eye, Marshalling } from '@nutui/icons-react-taro';
import { Button, ConfigProvider, Image, Input } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import BasicLayout from '@/components/BasicLayout';

const Register = () => {
  const src =
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg';

  // 按钮样式
  const btnStyle = {
    nutuiButtonDefaultHeight: '42px', // 	type 为 default 的按钮的高度
  };

  // 设置密码框的可见
  const [inputType, setInputType] = useState<'password' | 'text'>('password');
  const [againInputType, setAgainInputType] = useState<'password' | 'text'>('password');

  // 是否同意用户协议
  const [isAgree, setIsAgree] = useState(false);

  // 查看用户协议
  const onViewAgreement = () => {
    Taro.showToast({ title: '查看用户协议', icon: 'none' });
  };

  return (
    <BasicLayout>
      <View className="flex-justify flex-col">
        <View className="h-[160rpx] mt-[120rpx] mb-[70rpx] flex-center">
          <Image src={src} mode="scaleToFill" width="80" height="80" radius="50%" />
        </View>
        <View className="flex flex-col px-[70rpx]">
          <View className="flex-center overflow-hidden shadow-[0_0_60rpx_0_rgba(43,86,112,.1)] rounded-[40rpx]">
            <Input placeholder="请输入账号" />
          </View>
          <View className="mt-[40rpx] flex-center overflow-hidden shadow-[0_0_60rpx_0_rgba(43,86,112,.1)] rounded-[40rpx]">
            <Input type={inputType} placeholder="请输入密码" />
            <View
              className="pr-[20rpx]"
              onClick={() => setInputType(inputType === 'text' ? 'password' : 'text')}
            >
              {inputType === 'text' ? <Eye /> : <Marshalling />}
            </View>
          </View>
          <View className="mt-[40rpx] flex-center overflow-hidden shadow-[0_0_60rpx_0_rgba(43,86,112,.1)] rounded-[40rpx]">
            <Input type={againInputType} placeholder="再次确认密码" />
            <View
              className="pr-[20rpx]"
              onClick={() => setAgainInputType(againInputType === 'text' ? 'password' : 'text')}
            >
              {againInputType === 'text' ? <Eye /> : <Marshalling />}
            </View>
          </View>
        </View>

        <View className="mt-[90rpx] px-[70rpx]">
          <ConfigProvider theme={btnStyle}>
            <Button block type="primary" color="#157658">
              注册
            </Button>
          </ConfigProvider>
        </View>

        <View className="flex-center flex-row mt-[60rpx] color-black text-[28rpx]">
          <View className="h-[28rpx] leading-[28rpx]" onClick={() => setIsAgree(!isAgree)}>
            {isAgree ? (
              <Checked size="28rpx" color="#157658" />
            ) : (
              <CheckNormal size="28rpx" color="#157658" />
            )}
          </View>
          <View className="ml-[16rpx]">
            同意
            <Text className="color-[#1E90FF]" onClick={onViewAgreement}>
              《用户协议》
            </Text>
          </View>
        </View>
      </View>
    </BasicLayout>
  );
};

export default Register;
