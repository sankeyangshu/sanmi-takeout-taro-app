import { Text, View } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import './index.scss';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <View className="flex-center text-red-400 text-40px">
      <Text>Hello world!</Text>
    </View>
  );
}
