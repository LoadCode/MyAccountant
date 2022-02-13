import { primaryGray, primaryGreen, primaryOrange, secondaryGray } from '@constants/colors';
import { scale } from '@utils/scalingUtils';
import { StyleSheet } from 'react-native';

const BAR_HEIGHT = scale(18);
const RADIUS = 5;

export default StyleSheet.create({
  container: {
    marginTop: 12
  },
  barBackground: {
    height: BAR_HEIGHT,
    backgroundColor: secondaryGray,
    borderRadius: RADIUS
  },
  activeBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: BAR_HEIGHT,
    backgroundColor: primaryGreen,
    borderRadius: RADIUS
  }
});
