import React from "react";
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


interface CheckBoxProps {
    isChecked: boolean,
    onPress: () => void
}
const CheckBox = (props: CheckBoxProps) =>  {
    const { isChecked, onPress } = props;
    const icon = isChecked ? 'checkbox-marked' : 'checkbox-blank'
  return (
    <Pressable
    onPress={onPress}
    >
      <MaterialCommunityIcons name={icon} size={24} color="black" />
    </Pressable>
  );
}


export default CheckBox;