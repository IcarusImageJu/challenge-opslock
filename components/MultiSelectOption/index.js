import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

import styles from './styles';

function MultiSelectOption({
  label = '',
  children,
  onPress = () => {},
  selected = false,
  theme,
}) {
  return (
    <TouchableHighlight
      style={[
        styles.option,
        theme && {borderColor: theme},
        selected && styles.optionActive,
        selected && theme && {backgroundColor: theme},
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.label,
          theme && {color: theme},
          selected && styles.labelActive,
        ]}>
        {label || children}
      </Text>
    </TouchableHighlight>
  );
}

export default MultiSelectOption;
