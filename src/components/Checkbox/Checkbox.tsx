/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity} from 'react-native';
import React, {FC, memo} from 'react';
import styles from './Checkbox.styles';

interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
}

const Checkbox: FC<CheckboxProps> = ({checked, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, checked ? {borderWidth: 2} : {}]}>
      {checked ? <View style={styles.innerSquare} /> : null}
    </TouchableOpacity>
  );
};

export default memo(Checkbox);
