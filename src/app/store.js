import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import postsSlice from '~/features/posts/postsSlice';
import userReducer from '~/features/user/userSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        posts: postsSlice,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});
