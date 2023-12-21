import { Button } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro, { useLoad } from '@tarojs/taro';
import BasicLayout from '@/components/BasicLayout';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  const onClickLogin = () => {
    Taro.navigateTo({ url: '/pages/Login/index' });
  };

  return (
    <BasicLayout>
      <View className="text-red-400 text-40px">
        <Text>Hello world!</Text>
        <Button type="primary" onClick={onClickLogin}>
          主要按钮
        </Button>
      </View>
    </BasicLayout>
  );
}
