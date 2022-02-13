import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '@constants/routes';
import { RoutesParamList } from '@constants/routesParamList';
import { inferRoute } from '@utils/navUtils';
import Home from '@screens/Home';
import NestedHome from '@screens/NestedHome';
import Analytics from '@screens/Analytics';
import Settings from '@screens/Settings';
import CustomTabBar from '@components/CustomTabBar';
import { appStackNavConfig } from '@config/navigation';

const HomeStack = createStackNavigator<RoutesParamList>();
const AnalyticsStack = createStackNavigator<RoutesParamList>();
const SettingsStack = createStackNavigator<RoutesParamList>();
const Tab = createBottomTabNavigator<RoutesParamList>();
function BuildHomeStack() {
  return (
    <HomeStack.Navigator {...appStackNavConfig}>
      {inferRoute(HomeStack)(Routes.Home, Home)}
      {inferRoute(HomeStack)(Routes.NestedHome, NestedHome)}
    </HomeStack.Navigator>
  );
}

function BuildAnalyticsStack() {
  return (
    <AnalyticsStack.Navigator {...appStackNavConfig}>
      {inferRoute(AnalyticsStack)(Routes.Analytics, Analytics)}
    </AnalyticsStack.Navigator>
  );
}

function BuildSettingsStack() {
  return (
    <SettingsStack.Navigator {...appStackNavConfig}>
      {inferRoute(SettingsStack)(Routes.Settings, Settings)}
    </SettingsStack.Navigator>
  );
}
function AppStack() {
  return <Tab.Navigator screenOptions={{headerShown: false}}  tabBar={CustomTabBar} >
      {inferRoute(Tab)(Routes.HomeStack, BuildHomeStack)}
      {inferRoute(Tab)(Routes.AnalyticsStack, BuildAnalyticsStack)}
      {inferRoute(Tab)(Routes.SettingsStack, BuildSettingsStack)}
    </Tab.Navigator>;
}

export default AppStack;
