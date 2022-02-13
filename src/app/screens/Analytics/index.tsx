import React, { memo } from 'react';
import { View } from 'react-native';
import CustomText from '@components/CustomText';

import styles from './styles';

function Analytics() {
  return (
    <View style={styles.container}>
      <CustomText style={styles.home}>MoneyGuard Analytics</CustomText>
    </View>
  );
}

export default memo(Analytics);
