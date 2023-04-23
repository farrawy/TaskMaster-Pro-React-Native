import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './Button.styles';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  backgroundColor: string;
  color?: string;
  styling?: any;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  backgroundColor,
  color,
  styling,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor}]}>
      <Text style={[styles.title, {color}, {...styling}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
