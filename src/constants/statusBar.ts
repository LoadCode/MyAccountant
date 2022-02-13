import { primaryGreen, white } from './colors';

const statusBarConfig = {
  transparentStatusBar: {
    barStyle: 'dark-content',
    translucent: true,
    backgroundColor: 'rgba(255, 255, 255, 0.6)'
  },
  greenStatusBar: { barStyle: 'light-content', backgroundColor: primaryGreen },
  whiteStatusBar: { barStyle: 'dark-content', backgroundColor: white }
} as const;

export default statusBarConfig;
