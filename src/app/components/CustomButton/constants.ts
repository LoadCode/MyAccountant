import { TouchableOpacityProps, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { VariantsInterface as CustomTextVariants } from '@components/CustomText/constants';

export const VARIANTS = ['borderless', 'big', 'radial', 'black', 'green', 'white', 'gray'];

interface CustomButtonVariants {
  borderless?: boolean;
  big?: boolean;
  radial?: boolean;
  black?: boolean;
}

export interface CustomButtonProps extends CustomTextVariants, CustomButtonVariants {
  onPress: TouchableOpacityProps['onPress'];
  activeOpacity?: number;
  disabled?: boolean;
  selected?: boolean;
  icon?: number;
  iconStyle?: ImageStyle;
  style?: ViewStyle;
  textStyle?: TextStyle;
  title?: string;
}
