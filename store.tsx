import { configureStore } from '@reduxjs/toolkit';
import PostReducer from './src/features/posts/postsSlice';

const store = configureStore({
  reducer: {
    posts: PostReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
