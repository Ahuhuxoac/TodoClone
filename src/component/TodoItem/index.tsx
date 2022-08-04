import React, { useEffect, useState } from "react";
import { Text, Pressable, StyleSheet, View } from "react-native";
import CheckBox from "../CheckBox";
import Textbt from "../Textbt";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { deleteTodo } from "../../redux/todoSlice";
import { useAppDispatch } from "../../hooks";

interface TodoItemProps {
  todo: {
    id: String;
    title: String;
    isChecked: boolean;
  };
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isCheck, setCheck] = useState(false);

  useEffect(() => {
    if (!todo) {
      return;
    }
    setCheck(todo.isChecked);
  }, [todo]);

  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("ItemScreen", { id: todo.id });
  };

  const dispatch = useAppDispatch();

  
  return (
    <View style={styles.form}>
      <CheckBox
        isChecked={isCheck}
        onPress={() => {
          setCheck(!isCheck);
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <Textbt text={todo.title} onPress={onPress} />
        {isCheck === true ? (
          <Pressable 
          onPress={()=> dispatch(deleteTodo({
              id: todo.id
          }))}>
            <AntDesign name="delete" size={24} color="black" />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
  },
  title: {
    flex: 1,
    color: "black",
    fontSize: 16,
    marginLeft: 7,
  },
});

export default TodoItem;
