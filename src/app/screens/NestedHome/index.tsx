import React, { memo } from 'react';
import { View } from 'react-native';
import CustomText from '@components/CustomText';

import styles from './styles';

function NestedHome() {
  return (
    <View style={styles.container}>
      <CustomText style={styles.home}>MoneyGuard Nested Home</CustomText>
    </View>
  );
}

export default memo(NestedHome);
