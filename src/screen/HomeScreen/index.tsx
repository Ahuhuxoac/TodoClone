import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import TodoItem from "../../component/TodoItem";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../hooks";

const HomeScreen = () => {
  const Items = useAppSelector((state) => state.todo.todoList);
  console.log(Items);

  const navigation = useNavigation();
  const goDetail = () => {
    navigation.navigate("ItemScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleapp}>TODO APP</Text>
      <View style={styles.icon}>
        <Pressable onPress={goDetail}>
          <Ionicons name="create-outline" size={24} color="black" />
        </Pressable>
      </View>

      <FlatList
        data={Items}
        renderItem={({ item }) => <TodoItem todo={item} />}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    margin: 20,
  },
  icon: {
    alignItems: "flex-end",
    height: 40,
  },
  titleapp: {
    fontSize: 40,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default HomeScreen;
