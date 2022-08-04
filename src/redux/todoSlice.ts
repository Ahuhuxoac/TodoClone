import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { v4 as uuidv4 } from 'uuid';
import { todoItem } from './types';

//Defining our initialState's type
type initialStateType = {
  todoList: todoItem[];
};

const todoList: todoItem[] = [
  {
    id: uuidv4(),
    title: 'VAN',
    description: 'faoifjiwejfoiwjefioweif',
    isChecked: false,
  },
  {
    id: uuidv4(),
    title: "TOAN",
    description: 'iuhcoiwjcewjoiew',
    isChecked: false,

  },
  {
    id: uuidv4(),
    title: 'VAT LY',
    description: 'sdfsfkehjooiwecjj',
    isChecked: false,

  },
];

const initialState: initialStateType = {
  todoList,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<todoItem>) => {
      state.todoList.push(action.payload);
    },
    updateTodo: (state, action: PayloadAction<todoItem>) => {
      const {
        payload: { title, id, description,isChecked},
      } = action;
      state.todoList = state.todoList.map((todo) =>
        todo.id === id 
        ? 
        { ...todo, description, title, isChecked } 
        : 
        todo,
      );
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
        console.log(action.payload.id)
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
        );
    },
  },
});

export const { addNewTodo, updateTodo, deleteTodo } = todoSlice.actions;
export const selectTodoList = (state: RootState) => state.todo.todoList;

export default todoSlice.reducer;
