import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { URL } from '../../../constants/URL';
import { PostProps } from '../../../types/postprops';

const initialState: PostProps[] = [];

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch(URL);
  const posts = await response.json();
  return posts;
});

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id: number) => {
    try {
      const response = await fetch(`${URL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete the post.');
      }
      return id;
    } catch (error) {
      console.error('An error occurred while deleting the post:', error);
      throw error;
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchPosts.fulfilled,
        (state: PostProps[], action: PayloadAction<PostProps[]>) => {
          return action.payload;
        }
      )
      .addCase(
        deletePost.fulfilled,
        (state: PostProps[], action: PayloadAction<number>) => {
          return state.filter((post) => post.id !== action.payload);
        }
      );
  },
});

export default postsSlice.reducer;
