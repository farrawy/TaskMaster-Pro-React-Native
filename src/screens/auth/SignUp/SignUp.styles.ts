import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  title: {
    height: 34,
    fontWeight: '700',
    fontSize: 28,
    letterSpacing: 0.36,
    marginTop: 20,
  },
  content: {
    flex: 1,
    marginTop: 30,
  },
  input: {
    height: 50,
    marginVertical: 10,
    backgroundColor: colors.gray,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button: {
    marginTop: 20,
  },
  login: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: colors.darkGray,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.24,
  },
  link: {
    color: colors.secondary,
    marginLeft: 5,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    justifyContent: 'center',
  },
  terms: {
    color: colors.darkGray,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.24,
    marginLeft: 6,
  },
});

export default styles;
