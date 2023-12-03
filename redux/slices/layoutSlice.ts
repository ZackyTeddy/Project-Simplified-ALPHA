import { ShapeItem } from '@/utils/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface LayoutState {
    blueprint: ShapeItem[]
}

const initialState : LayoutState = {
    blueprint: [],
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setBlueprint: (state, action) => {
            state.blueprint = action.payload;
        },
        pushToBlueprint: (state, action: PayloadAction<ShapeItem>) => {
            state.blueprint.push(action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    setBlueprint,
    pushToBlueprint,
} = layoutSlice.actions

export default layoutSlice.reducer