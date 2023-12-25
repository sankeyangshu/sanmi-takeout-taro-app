import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';

/**
 * 设备导航栏信息类型
 */
interface NavBarInfoType {
  /**
   * 状态栏的高度，单位px
   */
  statusBarHeight: number;

  /**
   * 标题栏高度
   */
  titleBarHeight: number;

  /**
   * 标题宽度
   */
  titelBarWidth: number;

  /**
   * 导航栏高度
   */
  navBarHeight: number;

  /**
   * 两边的边距
   */
  marginSides: number;

  /**
   * 胶囊宽度
   */
  capsuleWidth: number;

  /**
   * 胶囊高度
   */
  capsuleHeight: number;

  /**
   * 内容区高度 - 去掉导航栏，屏幕剩余的高度
   */
  contentHeight: number;

  /**
   * 屏幕高度，单位px
   */
  screenHeight: number;

  /**
   * 可使用窗口高度，单位px
   */
  windowHeight: number;
}

/**
 * 获取设备导航栏信息
 */
const useNavBarInfo = () => {
  const [navBarInfo, setNavBarInfo] = useState<NavBarInfoType>({
    statusBarHeight: 0,
    titleBarHeight: 0,
    titelBarWidth: 0,
    navBarHeight: 0,
    marginSides: 0,
    capsuleWidth: 0,
    capsuleHeight: 0,
    contentHeight: 0,
    screenHeight: 0,
    windowHeight: 0,
  });

  useEffect(() => {
    // 获取设备系统信息
    const { screenWidth, screenHeight, statusBarHeight, windowHeight } = Taro.getSystemInfoSync();

    // 获取胶囊信息
    const { width, height, top, right } = Taro.getMenuButtonBoundingClientRect();

    // 判断状态栏的高度是否存在
    if (!statusBarHeight) return;

    //  计算标题栏高度
    const titleBarHeight = height + (top - statusBarHeight) * 2;

    // 计算导航栏高度，这里要加上系统状态栏的高度，否则小程序顶部内容会顶到状态栏最顶部位置
    const navBarHeight = statusBarHeight + titleBarHeight;

    // 计算两边的边距
    const marginSides = screenWidth - right;

    // 计算标题宽度
    const titelBarWidth = screenWidth - width - marginSides * 3;

    // 去掉导航栏，屏幕剩余的高度
    const contentHeight = screenHeight - navBarHeight;

    setNavBarInfo({
      statusBarHeight,
      titleBarHeight,
      titelBarWidth,
      navBarHeight,
      marginSides,
      capsuleWidth: width,
      capsuleHeight: height,
      contentHeight,
      screenHeight,
      windowHeight,
    });
  }, []);

  return navBarInfo;
};

export default useNavBarInfo;
