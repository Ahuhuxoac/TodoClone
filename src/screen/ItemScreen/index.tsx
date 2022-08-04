import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Textbt from "../../component/Textbt";
import { useRoute, useNavigation } from "@react-navigation/native";
import { v4 as uuidv4 } from "uuid";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { addNewTodo, updateTodo } from "../../redux/todoSlice";

const ItemScreen = () => {
  const navigation = useNavigation();
  const goHome = () => {
    navigation.navigate(`HomeScreen`);
  };

  const route = useRoute();
  const id = route.params?.id;
  const Items = useAppSelector((state) =>
    state.todo.todoList.find((item) => item.id === route.params?.id)
  );

  const [title, setTitle] = useState<string | undefined>(Items?.title || "");
  const [description, setDescrip] = useState<string | undefined>(
    Items?.description || ""
  );

  let isChecked = false;
  const dispatch = useAppDispatch();
  const handleSubmit = () => {
    if (route.params?.id) {
      updateItem();
      goHome();
      return;
    }
    dispatch(addNewTodo({ id: uuidv4(), title, description, isChecked }));
    clearItem();
    goHome();
  };

  const updateItem = () => {
    console.log("update");
    dispatch(updateTodo({ id , title, description, isChecked }));
    clearItem();
  };

  const clearItem = () => {
    setTitle("");
    setDescrip("");
  };
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Textbt text="Back" onPress={goHome} />
        <Textbt text="Save" onPress={handleSubmit} />
      </View>
      <View style={styles.container}>
        <Text>TITLE</Text>
        <TextInput
          placeholder="TITLE"
          style={styles.title}
          value={title}
          onChangeText={setTitle}
        />
        <Text>DESCRIPTION</Text>
        <TextInput
          placeholder="DESCRIPTION"
          style={styles.description}
          value={description}
          onChangeText={setDescrip}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "##e1e8f2",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {},
  title: {
    height: 80,
    borderColor: "black",
    borderRadius: 10,
  },
  description: {
    height: 200,
    borderColor: "black",
    borderRadius: 10,
  },
});
export default ItemScreen;
