import { StyleSheet } from 'react-native';
import fonts from '@config/fonts';
import { primaryGray, primaryGreen, primaryOrange, primaryRed, transparent, white } from '@constants/colors';
import { SIZES } from '@constants/fonts';
import { moderateScale } from '@utils/scalingUtils';
import { StringObject, NumberObject } from '@interfaces/globalInterfaces';

export const getColors = (colorsObj: StringObject) => 
  Object.keys(colorsObj).reduce(
    (colors, color) => ({ ...colors, ...{ [color]: { color: colorsObj[color] } } }),
    {}
  );

const getSizes = (sizesObj: NumberObject) =>
  Object.keys(sizesObj).reduce(
    (sizes, size) => ({ ...sizes, ...{ [size]: { fontSize: moderateScale(sizesObj[size]) } } }),
    {}
  );

export default StyleSheet.create({
  base: {
    ...fonts.baseFont,
    backgroundColor: transparent
  },
  semiBold: fonts.semiBoldFont,
  bold: fonts.boldFont,
  italic: fonts.baseItalicFont,
  center: {
    textAlign: 'center'
  },
  justify: {
    textAlign: 'justify'
  },
  right: {
    textAlign: 'right'
  },
  error: {
    color: primaryRed
  },
  // Colors
  ...getColors({ primaryGray, primaryGreen, primaryRed, primaryOrange, white }),
  // Sizes
  ...getSizes({
    xxsmall: SIZES.XXSMALL,
    xsmall: SIZES.XSMALL,
    small: SIZES.SMALL,
    medium: SIZES.MEDIUM,
    xmedium: SIZES.XMEDIUM,
    big: SIZES.BIG,
    xbig: SIZES.XBIG
  })
});
