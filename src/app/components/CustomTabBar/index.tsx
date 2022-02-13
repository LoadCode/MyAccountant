import React from 'react';
import i18next from 'i18next';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, SafeAreaView, Image, ImageSourcePropType } from 'react-native';
import homeEmpty from '@assets/home-empty.png';
import homeFilled from '@assets/home-fill.png';
import analyticsEmpty from '@assets/analytics-empty.png';
import analyticsFilled from '@assets/analytics-fill.png';
import settingsEmpty from '@assets/settings-empty.png';
import settingsFilled from '@assets/settings-fill.png';
import { GenericObjectInterface } from '@interfaces/globalInterfaces';
import CustomText from '@components/CustomText';

import styles, { getTextStyle, getIconStyle } from './styles';

const TAB_ICONS: GenericObjectInterface<ImageSourcePropType> = {
  'HomeStack-empty': homeEmpty,
  'HomeStack-fill': homeFilled,
  'AnalyticsStack-empty': analyticsEmpty,
  'AnalyticsStack-fill': analyticsFilled,
  'SettingsStack-empty': settingsEmpty,
  'SettingsStack-fill': settingsFilled
};

function TabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, params: {}, merge: true });
          }
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={styles.button}
            key={route.name}
          >
            <Image source={TAB_ICONS[`${route.name}-${isFocused ? 'fill' : 'empty'}`]} resizeMode="contain" style={[styles.icon, getIconStyle(isFocused)]} />
            <CustomText xsmall bold={isFocused}  style={getTextStyle(isFocused)} >
              {i18next.t(`app:${route.name}`)}
            </CustomText>
          </TouchableOpacity>
        );
      })}
    </View>
    </SafeAreaView>
  );
}

export default TabBar;