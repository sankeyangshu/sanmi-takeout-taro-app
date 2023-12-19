import { Button } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import './index.scss';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <View className=" text-red-400 text-40px">
      <Text>Hello world!</Text>
      <Button type="primary">主要按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="default">默认按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="success">成功按钮</Button>
    </View>
  );
}
