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
    error: null,
}

export const saveCurrentBlueprint = createAsyncThunk(
    'saveCurrentBlueprint', 
    async (params: any) => {
    console.log('updating blueprint')
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
            state.id = action.payload.id;
            console.log('action.payload', action.payload)
            if(action.payload.blueprints){
                state.blueprint = action.payload.blueprints.blueprint;
            }
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
    extraReducers: (builder) => {
        builder
            .addMatcher(
                isAnyOf(
                    saveCurrentBlueprint.pending,
                ),(state) => {
                    state.isLoading = true
                }
            )
            .addMatcher(
                isAnyOf(
                    saveCurrentBlueprint.fulfilled,
                ),(state, action) => {
                    state.isLoading = false
                }
            )
            .addMatcher(
                isAnyOf(
                    saveCurrentBlueprint.rejected,
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
} = layoutSlice.actions

export default layoutSlice.reducer