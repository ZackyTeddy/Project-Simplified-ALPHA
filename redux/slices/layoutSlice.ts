import { toast } from '@/components/ui/use-toast';
import { client } from '@/utils/genqlClient';
import { ShapeItem } from '@/utils/types';
import { PayloadAction, createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit'

interface LayoutState {
    id: string,
    blueprint: ShapeItem[],
    metadata: {
        layoutName: string
    },
    positions: any[],
    isLoading: boolean,
    selectedElement: string | null,
    error: any,
}

const initialState : LayoutState = {
    id: "",
    blueprint: [],
    metadata: {
        layoutName: "Loading..."
    },
    positions: [],
    isLoading: false,
    selectedElement: null,
    error: null,
}

export const saveCurrentLayout = createAsyncThunk(
    'saveCurrentLayout', 
    async (params: any) => {
    console.log('updating layout')
    await client.mutation({
        updateLayout: {
            __args: {
                id: params.id,
                blueprint: params.blueprint,
                metadata: params.metadata,
                positions: params.positions,
            },
            layoutId: true
        }
    })
    .then((res) => {
        console.log('Update Blueprint success', res)
        toast({
            title: "Action Passed",
            description: "Updated Blueprint successfully!"
        })
    })
    .catch(error => {
        console.log('Update Blueprint error', error);
        toast({
            title: "Action Passed",
            description: "Updated Blueprint failed!"
        })
    })
})

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setCurrentBlueprint: (state, action) => {
            // @params - id, blueprint
            state.id = action.payload.id;
            console.log('action.payload', action.payload)
            if(action.payload.blueprint){
                state.blueprint = action.payload.blueprint;
            }
            console.log('action.payload > setBp', action.payload)
        },
        pushToBlueprint: (state, action) => {
            // @params - element props
            let newId = String(state.blueprint.length + 1)
            let newPush = {...action.payload, id: newId} as ShapeItem
            console.log('newPush', newPush)
            state.blueprint.push(newPush)
        },
        setSelectedElement: (state, action) => {
            // @params - index number as string
            state.selectedElement = action.payload
            console.log("ELEMENT SELECTED >> ", state.selectedElement)
        },
        updateElementInBlueprint: (state, action) => {
            // @params - modified element props
            if(action.payload.newAttributes){
                let targetId = state.blueprint.findIndex((item) => item.id === action.payload.newAttributes.id)
                console.log('targetId', targetId)
                state.blueprint[targetId] = action.payload.newAttributes
                console.log('update element attrs success', state.blueprint)
            } else {
                console.log("update element attrs failed")
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                isAnyOf(
                    saveCurrentLayout.pending,
                ),(state) => {
                    state.isLoading = true
                }
            )
            .addMatcher(
                isAnyOf(
                    saveCurrentLayout.fulfilled,
                ),(state, action) => {
                    state.isLoading = false
                }
            )
            .addMatcher(
                isAnyOf(
                    saveCurrentLayout.rejected,
                ),(state, action) => {
                    state.isLoading = false
                    state.error = action.error.message
                }
            )
    }
})

// Action creators are generated for each case reducer function
export const {
    setCurrentBlueprint,
    pushToBlueprint,
    updateElementInBlueprint,
    setSelectedElement,
} = layoutSlice.actions

export default layoutSlice.reducer