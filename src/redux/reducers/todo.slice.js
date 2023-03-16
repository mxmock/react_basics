import { getRequest } from "../../api/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk("todos/getAll", async (_, thunkApi) => {
  const { fulfillWithValue, rejectWithValue } = thunkApi;
  const { status, result, error } = await getRequest("/todos");

  return error
    ? rejectWithValue(`Cannot get todos - Error status ${status} - ${error}`)
    : fulfillWithValue(result);
});

export const getOneTodo = createAsyncThunk("todos/getOne", async (todoId, thunkApi) => {
  const { fulfillWithValue, rejectWithValue } = thunkApi;
  const { status, result, error } = await getRequest(`/todos/${todoId}`);

  return error
    ? rejectWithValue(`Cannot get todos - Error status ${status} - ${error}`)
    : fulfillWithValue(result);
});

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    loading: false,
  },
  reducers: {
    test: (state) => {
      return { ...state };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.fulfilled, (state, action) => {
        return { ...state, loading: false, todos: [...action.payload] };
      })
      .addCase(getTodos.rejected, (state, action) => {
        return { ...state, loading: false };
      })
      .addCase(getTodos.pending, (state, action) => {
        return { ...state, loading: true };
      })
      .addCase(getOneTodo.fulfilled, (state, action) => {
        return { ...state, loading: false, todos: [action.payload] };
      })
      .addCase(getOneTodo.rejected, (state, action) => {
        return { ...state, loading: false };
      })
      .addCase(getOneTodo.pending, (state, action) => {
        console.log(action.type);
        return { ...state, loading: true };
      });
  },
});

export const { test } = todoSlice.actions;
export default todoSlice.reducer;
