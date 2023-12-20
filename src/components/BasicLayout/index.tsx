import { ConfigProvider } from '@nutui/nutui-react-taro';
import { FC, PropsWithChildren } from 'react';

const BasicLayout: FC<PropsWithChildren> = ({ children }) => {
  const customTheme = {
    nutuiColorPrimary: '#157658',
  };
  return <ConfigProvider theme={customTheme}>{children}</ConfigProvider>;
};

export default BasicLayout;
