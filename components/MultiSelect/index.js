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
  return (
    <View>
      <View>
        <Text>{title || children}</Text>
        <Text>2</Text>
      </View>
      <View>
        {options.map(({key, label}) => (
          <MultiSelectOption key={key} label={label} />
        ))}
      </View>
    </View>
  );
}

export default MultiSelect;
