import React, {useState} from 'react';

import {View, Text} from 'react-native';
import styles from './styles';
import MultiSelect from '../../components/MultiSelect';

const OPTIONS = [
  {key: '1', label: 'First Label'},
  {key: '2', label: 'Second Label'},
  {key: '3', label: 'Third Label'},
  {key: '4', label: 'Another Label'},
  {key: '5', label: 'Yay, last one'},
];

function HomePage() {
  const [selected, setSelected] = useState([]);

  function handleOnSelect(key) {
    const newSelect = [...selected];
    const indexSelectedKey = newSelect.indexOf(key);

    if (indexSelectedKey === -1) {
      // case where the key is not in the selected array
      newSelect.push(key);
    } else {
      // case where the key is already in the selected arra
      newSelect.splice(indexSelectedKey, 1);
    }
    setSelected(newSelect);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the HomePage</Text>
      <MultiSelect
        options={OPTIONS}
        selected={selected}
        title="Select any option"
        onSelect={handleOnSelect}
        theme="teal"
      />
    </View>
  );
}

export default HomePage;
