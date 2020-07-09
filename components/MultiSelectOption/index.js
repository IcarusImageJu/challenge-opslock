import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

function MultiSelectOption({label, children}) {
  return (
    <TouchableHighlight>
      <Text>{label || children}</Text>
    </TouchableHighlight>
  );
}

export default MultiSelectOption;
