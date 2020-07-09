import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

function MultiSelectOption({label, children, onPress}) {
  return (
    <TouchableHighlight onPress={onPress}>
      <Text>{label || children}</Text>
    </TouchableHighlight>
  );
}

export default MultiSelectOption;
