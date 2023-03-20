import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postFileRequest, postRequest } from "../../api/api";

export const uploadImage = createAsyncThunk("file/upload", async (form, thunkApi) => {
  const { fulfillWithValue, rejectWithValue } = thunkApi;

  console.log(form);
  const formData = new FormData();

  formData.append("description", form.description);
  formData.append("fileImage", form.fileImage);

  const { status, result, error } = await postFileRequest("/todos/file", formData);

  console.log(result); // image url

  return error
    ? rejectWithValue(`Cannot upload image - Error status ${status} - ${error}`)
    : fulfillWithValue(result);
});

export const fileSlice = createSlice({
  name: "file",
  initialState: {
    fileImage: null,
    description: "",
    loading: false,
    imgUrl: "",
  },
  reducers: {
    changeDescription: (state, action) => {
      return { ...state, description: action.payload.value };
    },
    uploadFile: (state, action) => {
      console.log(action.payload);
      return { ...state, fileImage: action.payload.fileImage };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadImage.fulfilled, (state, action) => {
        return { ...state, loading: false, imgUrl: action.payload.result };
      })
      .addCase(uploadImage.rejected, (state, action) => {
        return { ...state, loading: false };
      })
      .addCase(uploadImage.pending, (state, action) => {
        return { ...state, loading: true };
      });
  },
});

export const { changeDescription, uploadFile } = fileSlice.actions;
export default fileSlice.reducer;
