import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {FC, memo} from 'react';
import Button from '../../../components/Button/Button';
import colors from '../../../constants/colors';
import styles from './Login.styles';
import DismissKeyboard from '../../../utils/dismissKeyboard/dismissKeyboard';

interface LoginProps {
  navigation: any;
}

const Login: FC<LoginProps> = ({navigation}) => {
  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome Back!</Text>

        <View style={styles.content}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor={colors.black}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            placeholderTextColor={colors.black}
          />
          <View style={styles.button}>
            <Button
              title="Log In"
              backgroundColor={colors.primary}
              color={colors.white}
              onPress={() => navigation.replace('SignUp')}
            />
          </View>

          <View style={styles.signup}>
            <Text style={styles.signupText}>Not registered yet?</Text>
            <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
              <Text style={styles.link}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );
};

export default memo(Login);
