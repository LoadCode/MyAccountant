import { StackNavigationOptions } from '@react-navigation/stack';
import i18next from 'i18next';
import Routes from '@constants/routes';
import { primaryGreen, white } from '@constants/colors';
import statusBarConfig from '@constants/statusBar';
import { Navigation } from '@interfaces/navigation';

import fonts from './fonts';

// Default nav options for all screens
const defaultNavOptions = ({ route }: Navigation) => ({
    headerTitle: i18next.t(`app:${route.name}`),
    headerStyle: {
      backgroundColor: primaryGreen
    },
    headerBackTitleStyle: {
      color: white
    },
    headerTitleStyle: {
      ...fonts.headerFont
    }
});

export const appStackNavConfig = {
  screenOptions: defaultNavOptions
};

const defaultTabNavOptions = {
  showLabel: false,
  tabBarVisible: false
}

export const tabNavConfig = {
  screenOptions: defaultTabNavOptions
};

// Default nav options for all screens
export const appScreensNavOptions: Partial<Record<Routes, StackNavigationOptions>> = {
  // TODO: Add here the screens nav options that changes with respect to
  // the default ones defined in defaultNavOptions, for example...
  // [Routes.Home]: {
  //   headerTitle: 'Home'
  // },
  [Routes.Home]: {
    headerTitle: 'Payments',
  },
  [Routes.Analytics]: {
    headerTitle: 'Analytics'
  },
  [Routes.Settings]: {
    headerTitle: 'Settings'
  }
};

export const statusBarStyles = {
  // TODO: Change these styles to customize the status bar
  [Routes.Home]: statusBarConfig.greenStatusBar,
  [Routes.Analytics]: statusBarConfig.greenStatusBar,
  [Routes.Settings]: statusBarConfig.greenStatusBar,
  default: statusBarConfig.transparentStatusBar
};
