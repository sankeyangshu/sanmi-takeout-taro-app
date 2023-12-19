import { presetWeapp } from 'unocss-preset-weapp';
import { transformerClass } from 'unocss-preset-weapp/transformer';
import { defineConfig, transformerDirectives } from 'unocss';

export default defineConfig({
  presets: [
    presetWeapp({
      // h5兼容
      isH5: process.env.TARO_ENV === 'h5',
      platform: 'taro',
      taroWebpack: 'webpack5',
    }),
  ],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
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
