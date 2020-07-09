import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  option: {
    backgroundColor: 'transparent',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    marginBottom: 5,
    marginRight: 5,
  },
  optionActive: {
    backgroundColor: 'grey',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },
  labelActive: {
    color: 'white',
  },
});

export default styles;
