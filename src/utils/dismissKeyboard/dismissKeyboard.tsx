import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import React, {FC, memo} from 'react';

interface DismissKeyboardProps {
  children: any;
}

const DismissKeyboard: FC<DismissKeyboardProps> = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default memo(DismissKeyboard);
