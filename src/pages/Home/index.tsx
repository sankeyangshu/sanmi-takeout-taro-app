import { Button } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import BasicLayout from '@/components/BasicLayout';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <BasicLayout>
      <View className="text-red-400 text-40px">
        <Text>Hello world!</Text>
        <Button type="primary">主要按钮</Button>
      </View>
    </BasicLayout>
  );
}
