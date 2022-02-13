import React, { memo } from 'react';
import { View, ScrollView } from 'react-native';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';
import PercentageDisplay from '@components/PercentageDisplay';
import { primaryGray, secondaryGray } from '@constants/colors';

import styles from './styles';

function Home() {
  return (
    <View style={styles.container}>
      <CustomText bold primaryGreen>Stats for this period</CustomText>
      <PercentageDisplay title="Food" currentSpending={2250} thresholdAmount={3000} />
      <PercentageDisplay title="Transport" currentSpending={1580} thresholdAmount={1900} />
      {/* <PercentageDisplay title="Home services" currentSpending={1370} thresholdAmount={2000} /> */}
      <PercentageDisplay title="Technology" currentSpending={1550} thresholdAmount={2000} />
      <PercentageDisplay title="Entertaiment" currentSpending={1870} thresholdAmount={2000} />
      <View style={{borderWidth: 1, borderColor: secondaryGray, marginHorizontal: 20, marginVertical: 20}} />
      <CustomText primaryGreen xsmall>Category</CustomText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CustomButton big selected style={{marginRight: 20}} title='Food' onPress={() => console.log('Clicked')} />
        <CustomButton big selected style={{marginRight: 20}} title='Transport' onPress={() => console.log('Clicked')} />
        {/* <CustomButton big selected style={{marginRight: 20}} title='Home Services' onPress={() => console.log('Clicked')} /> */}
        <CustomButton big selected style={{marginRight: 20}} title='Technology' onPress={() => console.log('Clicked')} />
        <CustomButton big selected style={{marginRight: 20}} title='Entertaiment' onPress={() => console.log('Clicked')} />
      </ScrollView>
    </View>
  );
}

export default memo(Home);
