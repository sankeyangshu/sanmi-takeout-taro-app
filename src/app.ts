import { useLaunch } from '@tarojs/taro';
import { PropsWithChildren } from 'react';
import 'uno.css'; // 导入UnoCSS
import './styles/index.scss'; // 导入默认样式

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.');
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
