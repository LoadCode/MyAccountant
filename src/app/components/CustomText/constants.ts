import { ReactNode } from 'react';
import { TextProps, TextStyle, StyleProp } from 'react-native';

/*
 ** TODO: You can add styles to Base like Family Font to be the Text styles base!
 ** if you want to add a custom style, you need to add it here and in VARIANTS
 */

export const VARIANTS = [
  'semiBold',
  'bold',
  'italic',
  'center',
  'justify',
  'right',
  'primaryGray',
  'primaryGreen',
  'primaryOrange',
  'primaryRed',
  'white',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'xmedium',
  'big',
  'xbig',
  'error'
];

export interface VariantsInterface {
  semiBold?: boolean;
  bold?: boolean;
  italic?: boolean;
  center?: boolean;
  justify?: boolean;
  right?: boolean;
  primaryGray?: boolean;
  primaryGreen?: boolean;
  primaryOrange?: boolean;
  primaryRed?: boolean;
  white?: boolean;
  xxsmall?: boolean;
  xsmall?: boolean;
  small?: boolean;
  medium?: boolean;
  xmedium?: boolean;
  big?: boolean;
  xbig?: boolean;
  error?: boolean;
}

export interface CustomTextProps extends VariantsInterface {
  children: ReactNode;
  textProps?: TextProps;
  style?: StyleProp<TextStyle>;
}
