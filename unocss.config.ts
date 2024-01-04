import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';
import { presetWeapp } from 'unocss-preset-weapp';
import { transformerClass } from 'unocss-preset-weapp/transformer';
import { defineConfig, presetIcons, transformerDirectives } from 'unocss';

export default defineConfig({
  presets: [
    presetWeapp({
      // h5兼容
      isH5: process.env.TARO_ENV === 'h5',
      platform: 'taro',
      taroWebpack: 'webpack5',
    }),
    presetIcons({
      scale: 1,
      warn: true,
      extraProperties: {
        display: 'inline-block',
      },
      collections: {
        local: FileSystemIconLoader('./src/assets/icons'),
      },
    }),
  ],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-justify': 'flex justify-center',
      'flex-align': 'flex items-center',
      'border-bottom': 'border-b-[2rpx] border-b-solid border-b-[#f5f5f5]',
    },
  ],
  transformers: [
    transformerClass(),
    transformerDirectives({
      enforce: 'pre',
    }),
  ],
  content: {
    pipeline: {
      include: [/\.([jt]sx|css)($|\?)/],
      exclude: [
        'node_modules',
        '.git',
        '.husky',
        '.vscode',
        'dist',
        'public',
        'build',
        'mock',
        './stats.html',
      ],
    },
  },
});
