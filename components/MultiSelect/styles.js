import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bulletContainer: {
    backgroundColor: 'grey',
    borderRadius: 10,
    width: 20,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3,
  },
  bullet: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default styles;
