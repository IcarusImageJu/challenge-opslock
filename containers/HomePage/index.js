import React from 'react';

import {View, Text} from 'react-native';
import styles from './styles';
import MultiSelect from '../../components/MultiSelect';

function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the HomePage</Text>
      <MultiSelect
        options={[]}
        selected={[]}
        title="Select any option"
        onSelect={(key) => console.log(key)}
        style=""
      />
    </View>
  );
}

export default HomePage;
