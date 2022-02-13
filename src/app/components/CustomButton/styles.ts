import { StyleSheet } from 'react-native';
import { transparent, black, primaryGreen, gray, white } from '@constants/colors';
import fonts from '@config/fonts';

const iconSize = 20;

const borderlessStyle = {
  borderWidth: 0,
  backgroundColor: transparent
};

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  big: {
    paddingVertical: 16,
    paddingHorizontal: 6,
    borderRadius: 16,
    width: 120
  },
  bigContent: {...fonts.semiBoldFont, textAlign: 'center'},
  selected: {
    borderWidth: 1,
    borderColor: primaryGreen
  },
  icon: {
    height: iconSize,
    width: iconSize
  },
  borderless: borderlessStyle,
  radial: {
    borderRadius: 100
  },
  black: {
    backgroundColor: black
  },
  blackContent: {
    color: white
  },
  white: {
    backgroundColor: white
  },
  whiteContent: {
    color: black
  },
  gray: {
    backgroundColor: gray
  },
  grayContent: {
    color: black
  },
  borderlessContent: {
    color: gray
  },
  green: {
    backgroundColor: primaryGreen
  },
  greenContent: {
    color: white
  }
});
