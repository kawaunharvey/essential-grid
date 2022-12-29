// .storybook/YourTheme.js

import { create } from '@storybook/theming'

export default create({
    base: 'light',
    brandTitle: 'Essentials',
    brandUrl: 'https://kwn.digital',
    brandImage: 'https://ucarecdn.com/8fd3129e-7622-4b25-99d2-f1250eb9f4d3/',
    brandTarget: '_blank',
    colorPrimary: '#012622',
    colorSecondary: '#EF2D56',
    // UI
    appBg: '#150E1A',
    appContentBg: '#FFF',
    appBorderColor: 'grey',
    appBorderRadius: 0,
    // Typography
    fontBase: '"Inter", "Open Sans", sans-serif',
    fontCode: 'monospace',
    // Text colors
    textColor: '#150E1A',
    textInverseColor: 'rgba(255,255,255,0.9)',
    // Toolbar default and active colors
    barTextColor: '#150E1A',
    barSelectedColor: '#EF2D56',
    barBg: '#FFF',
    // Form colors
    inputBg: 'white',
    inputBorder: '#EF2D56',
    inputTextColor: '#150E1A',
    inputBorderRadius: 0,
})
