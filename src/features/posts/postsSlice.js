import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [null],
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
    },
});

export const { setPosts } = postsSlice.actions;

export const selectPosts = (state) => state.posts.posts;

export default postsSlice.reducer;
