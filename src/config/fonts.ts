import { white, black, primaryGray, primaryGreen } from '@constants/colors';
import { SEMIBOLD, BOLD, ITALIC, SIZES } from '@constants/fonts';
import { fontMaker } from '@utils/fontUtils';

// Here you can make your custom fonts
// I only recommend using family if you have more than one Font Family in the App.
export default {
  baseFont: fontMaker({ size: SIZES.MEDIUM, color: primaryGreen }),
  labelFont: fontMaker({ size: SIZES.XSMALL, color: primaryGreen }),
  headerFont: fontMaker({ size: SIZES.BIG, color: white, weight: BOLD }),
  baseItalicFont: fontMaker({ size: SIZES.MEDIUM, color: black, style: ITALIC }),
  semiBoldFont: fontMaker({ weight: SEMIBOLD, size: SIZES.MEDIUM, color: primaryGreen }),
  boldFont: fontMaker({ weight: BOLD, size: SIZES.MEDIUM, color: black })
};
