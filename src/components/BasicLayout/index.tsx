import { ConfigProvider } from '@nutui/nutui-react-taro';
import { FC, PropsWithChildren } from 'react';

const BasicLayout: FC<PropsWithChildren> = ({ children }) => {
  const customTheme = {
    nutuiColorPrimary: '#157658', // 主题色
    nutuiRateItemMargin: '4px', // 评分组件间距
  };
  return <ConfigProvider theme={customTheme}>{children}</ConfigProvider>;
};

export default BasicLayout;
