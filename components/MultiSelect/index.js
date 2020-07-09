import React from 'react';
import {View, Text} from 'react-native';
import MultiSelectOption from '../MultiSelectOption';

function MultiSelect({
  options = [],
  selected,
  style,
  onSelect,
  title,
  children,
}) {
  console.log(selected);

  return (
    <View>
      <View>
        <Text>{title || children}</Text>
        <Text>2</Text>
      </View>
      <View>
        {options.map(({key, label}) => (
          <MultiSelectOption
            key={key}
            label={label}
            onPress={() => onSelect(key)}
          />
        ))}
      </View>
    </View>
  );
}

export default MultiSelect;
