import { getRequest } from "../../api/api";
import { createSlice } from "@reduxjs/toolkit";

export const getTodos = () => async (dispatch, getState) => {
  const loading = getState().todo.loading;
  if (loading) return;
  dispatch(startLoading());
  const { status, result, error } = await getRequest("/todos");
  dispatch(setTodos({ todos: result }));
};

export const getOneTodo = (todoId) => async (dispatch, getState) => {
  const loading = getState().todo.loading;
  if (loading) return;
  dispatch(startLoading());
  const { status, result, error } = await getRequest(`/todos/${todoId}`);
  dispatch(setTodos({ todos: [result] }));
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    loading: false,
  },
  reducers: {
    startLoading: (state) => {
      return { ...state, loading: true };
    },
    stopLoading: (state) => {
      return { ...state, loading: false };
    },
    setTodos: (state, action) => {
      return { ...state, loading: false, todos: [...action.payload.todos] };
    },
  },
});

export const { startLoading, stopLoading, setTodos } = todoSlice.actions;
export default todoSlice.reducer;
