/* eslint-disable react-native/no-inline-styles */
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {FC, memo, useState} from 'react';
import Button from '../../../components/Button/Button';
import colors from '../../../constants/colors';
import styles from './SignUp.styles';
import Checkbox from '../../../components/Checkbox/Checkbox';
import Input from '../../../components/Input/Input';
import DismissKeyboard from '../../../utils/dismissKeyboard/dismissKeyboard';

interface SignUpProps {
  navigation: any;
}

const SignUp: FC<SignUpProps> = ({navigation}) => {
  const [checked, setChecked] = useState(false);

  const onCheckboxPress = () => {
    setChecked(!checked);
  };

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Join the hub!</Text>

        <View style={styles.content}>
          <Input placeholder={'First Name'} />
          <Input placeholder={'Last Name'} />
          <Input placeholder={'Email'} keyboardType={'email-address'} />
          <Input placeholder={'Password'} secureTextEntry />
          <Input placeholder={'Confirm Password'} secureTextEntry />

          <View style={styles.row}>
            <Checkbox checked={checked} onPress={onCheckboxPress} />
            <Text style={styles.terms}>I agree to the</Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.link,
                  {marginLeft: 2, textDecorationLine: 'underline'},
                ]}>
                Terms and Conditions
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <Button
              title="Create account"
              backgroundColor={colors.secondary}
              color={colors.white}
              onPress={() => navigation.replace('Login')}
            />
          </View>
          <View style={styles.login}>
            <Text style={styles.loginText}>Already a member?</Text>
            <TouchableOpacity onPress={() => navigation.replace('Login')}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );
};

export default memo(SignUp);
