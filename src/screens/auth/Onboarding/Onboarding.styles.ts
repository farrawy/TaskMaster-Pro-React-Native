import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.black,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 34,
    letterSpacing: 0.36,
    height: 34,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.darkGray,
    lineHeight: 20,
    textAlign: 'center',
    letterSpacing: -0.24,
    height: 40,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '70%',
  },
});

export default styles;
