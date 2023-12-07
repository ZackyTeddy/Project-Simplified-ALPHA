import { ShapeItem } from '@/utils/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface LayoutState {
    blueprint: ShapeItem[],
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
        pushToBlueprint: (state, action) => {
            let newId = String(state.blueprint.length + 1)
            let newPush = {...action.payload, id: newId} as ShapeItem
            console.log('newPush', newPush)
            state.blueprint.push(newPush)
        },
        updateElementInBlueprint: (state, action) => {
            if(action.payload.newAttributes){
                let targetId = state.blueprint.findIndex((item) => item.id === action.payload.newAttributes.id)
                state.blueprint[targetId] = action.payload.newAttributes
            } else {
                console.log("update element attrs failed")
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setBlueprint,
    pushToBlueprint,
    updateElementInBlueprint
} = layoutSlice.actions

export default layoutSlice.reducer