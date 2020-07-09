import React from 'react';
import {View, Text} from 'react-native';
import MultiSelectOption from '../MultiSelectOption';
import styles from './styles';

function MultiSelect({
  options = [],
  selected,
  theme = 'grey',
  onSelect,
  title,
  children,
}) {
  console.log(selected);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title || children}</Text>
        {selected.length > 0 && (
          <View
            style={[styles.bulletContainer, theme && {backgroundColor: theme}]}>
            <Text style={styles.bullet}>{selected.length}</Text>
          </View>
        )}
      </View>
      <View style={styles.list}>
        {options.map(({key, label}) => (
          <MultiSelectOption
            key={key}
            label={label}
            onPress={() => onSelect(key)}
            selected={selected.indexOf(key) !== -1}
            theme={theme}
          />
        ))}
      </View>
    </View>
  );
}

export default MultiSelect;
