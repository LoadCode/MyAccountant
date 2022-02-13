import { StyleSheet } from 'react-native';
import { primaryGreen, primaryGray } from '@constants/colors';
import { scale } from '@utils/scalingUtils';

const ICON_SIZE = scale(22);

export const getTextStyle = (isFocused: boolean) => ({
  color: isFocused ? primaryGreen : primaryGray
});

export const getIconStyle = (isFocused: boolean) => ({
  tintColor: isFocused ? primaryGreen : primaryGray
});

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10
  },
  button: {
    flex: 1,
    alignItems: 'center'
  },
  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE
  }
});
