import React, { useMemo, useState } from 'react';
import { LayoutChangeEvent, View, ViewStyle } from 'react-native';
import CustomText from '@components/CustomText';

import styles from './styles';
import { primaryGreen, primaryOrange, primaryRed } from '@constants/colors';

interface Props {
  title: string;
  currentSpending: number;
  thresholdAmount: number;
  style?: ViewStyle;
}
const options = { style: 'currency', currency: 'COP' };
const numberFormat = new Intl.NumberFormat('es-CO', options);
const getBarStyle = (current: number, threshold: number, maxWidth: number) => {
  const ratio = current / threshold;
  const barWidth = Math.round(ratio * maxWidth);
  return [ratio, barWidth > maxWidth ? maxWidth : barWidth];
};

function PercentageDisplay({ title, currentSpending, thresholdAmount, style }: Props) {
  const [dynamicStyles, setDynamicStyles] = useState({width: 0, backgroundColor: primaryGreen});
  const label = useMemo(() => `${numberFormat.format(currentSpending)} / ${numberFormat.format(thresholdAmount)}`, []);
  const handleLayoutChange = ({nativeEvent: {layout: {width}}}: LayoutChangeEvent) => {
    const [ratio, activeBarWidth] = getBarStyle(currentSpending, thresholdAmount, width);
    setDynamicStyles({width: activeBarWidth, backgroundColor: ratio > 0.85 ? primaryRed : ratio > 0.75 ? primaryOrange : primaryGreen });
  };
  return (
      <View style={[styles.container, style]}>
        <CustomText medium>{title}</CustomText>
        <View>
          <View style={styles.barBackground} onLayout={handleLayoutChange}/>
          <View style={[styles.activeBar, dynamicStyles]} />
        </View>
        <CustomText xsmall>{label}</CustomText>
    </View>
  );
}

export default PercentageDisplay;
