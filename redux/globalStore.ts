import { configureStore } from '@reduxjs/toolkit'
import layoutSlice from './slices/layoutSlice'

export const globalStore = configureStore({
    reducer: {
        layout: layoutSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof globalStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof globalStore.dispatch