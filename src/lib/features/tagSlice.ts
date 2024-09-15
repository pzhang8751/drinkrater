import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Tag = {
    isSelected : boolean; 
}

type IntitialState = {
    items : Record<string, Tag>;
}

const initialState : IntitialState = {
    items: {} 
}

export const tag = createSlice({
    name: "tag",
    initialState : initialState,
    reducers : {
        addTag : (state, action: PayloadAction<{id:string; item: Tag}>) => {
            const {id, item} = action.payload
            state.items[id] = item; 
        },
        updateTag : (state, action:PayloadAction<{id:string; value:boolean}>) => {
            const {id, value} = action.payload; 
            state.items[id] = {isSelected  : value}
        }
    }
})

export const {addTag, updateTag} = tag.actions; 
export default tag.reducer; 