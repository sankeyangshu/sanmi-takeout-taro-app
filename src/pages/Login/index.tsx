import { Eye, Github, Marshalling } from '@nutui/icons-react-taro';
import { Button, ConfigProvider, Image, Input } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import BasicLayout from '@/components/BasicLayout';

const Login = () => {
  const src =
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg';

  // 设置密码框的可见
  const [inputType, setInputType] = useState<'password' | 'text'>('password');

  // 按钮样式
  const btnStyle = {
    nutuiButtonDefaultHeight: '42px', // 	type 为 default 的按钮的高度
  };

  /**
   * 找回密码
   */
  const onFindPassword = () => {
    Taro.showToast({ title: '找回密码', icon: 'none' });
  };

  /**
   * 注册账号
   */
  const onRegister = () => {
    Taro.navigateTo({ url: '/pages/Register/index' });
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
        </View>

        <View className="mt-[90rpx] px-[70rpx]">
          <ConfigProvider theme={btnStyle}>
            <Button block type="primary" color="#157658">
              登录
            </Button>
          </ConfigProvider>
        </View>

        {/* 其他登录方式 */}
        <View className="flex-center flex-row mt-[200rpx]">
          <View className="pr-[40rpx]">
            <View className="i-local-wechat text-[64rpx] color-[#83DC42]" />
          </View>
          <View className="pr-[40rpx]">
            <View className="i-local-weibo text-[64rpx] color-[#F9221D]" />
          </View>
          <View className="pr-[40rpx]">
            <Github size={32} color="#24292E" />
          </View>
        </View>

        <View className="flex-center flex-row mt-[60rpx] color-black text-[28rpx]">
          <View className="color-[#1E90FF]" onClick={onFindPassword}>
            找回密码
          </View>
          <Text className="mx-[20rpx] text-[24rpx]">|</Text>
          <View className="color-[#1E90FF]" onClick={onRegister}>
            注册账号
          </View>
        </View>
      </View>
    </BasicLayout>
  );
};

export default Login;
