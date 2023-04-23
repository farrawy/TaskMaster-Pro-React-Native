import {ImageSourcePropType, Text} from 'react-native';
import React, {FC, memo} from 'react';

import {Motion} from '@legendapp/motion';

import {onboarding_1} from '../../../constants/images';

import styles from './Onboarding.styles';
import Button from '../../../components/Button/Button';
import colors from '../../../constants/colors';

interface OnboardingProps {
  navigation: any;
}

const Onboarding: FC<OnboardingProps> = ({navigation}) => {
  const loginHandler = () => {
    navigation.replace('Login');
  };
  const signupHandler = () => {
    navigation.replace('SignUp');
  };

  return (
    <Motion.View style={styles.container}>
      <Motion.Image
        initial={{y: -50}}
        animate={{x: 0, y: 0}}
        whileTap={{y: 20}}
        transition={{type: 'spring'}}
        source={onboarding_1 as ImageSourcePropType}
        style={styles.image}
      />

      <Motion.View
        style={styles.content}
        initial={{y: 50}}
        animate={{x: 0, y: 0}}
        whileTap={{y: 20}}
        transition={{type: 'spring'}}>
        <Text style={styles.title}>Welcome to TaskMaster Pro!</Text>
        <Text style={styles.subtitle}>
          Streamline Your Workload and Boost Productivity with Ease
        </Text>
        <Button
          title="Login"
          onPress={loginHandler}
          backgroundColor={colors.primary}
          color={colors.white}
        />
        <Button
          title="Get started!"
          onPress={signupHandler}
          backgroundColor={colors.secondary}
          color={colors.white}
        />
      </Motion.View>
    </Motion.View>
  );
};

export default memo(Onboarding);
