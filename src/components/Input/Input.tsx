import {TextInput, KeyboardTypeOptions} from 'react-native';
import React, {FC, memo} from 'react';
import styles from './Input.styles';
import colors from '../../constants/colors';

interface InputProps {
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
}

const Input: FC<InputProps> = props => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={colors.darkGray}
      autoCapitalize="none"
      autoCorrect={false}
      {...props}
    />
  );
};

export default memo(Input);
