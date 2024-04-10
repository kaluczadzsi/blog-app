import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { URL } from '../../../constants/URL';
import { Post } from '../../../types/post';

const initialState: Post[] = [];

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch(URL);
  const posts = await response.json();
  return posts;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchPosts.fulfilled,
      (state: Post[], action: PayloadAction<Post[]>) => {
        return action.payload;
      }
    );
  },
});

export default postsSlice.reducer;
