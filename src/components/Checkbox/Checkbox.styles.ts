import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    borderColor: colors.primary,
    borderWidth: 1,
    height: 16,
    width: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
  },
  innerSquare: {
    backgroundColor: colors.primary,
    height: 10,
    width: 10,
  },
});

export default styles;
