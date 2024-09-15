
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IntitialState = {
    stars : number; 
}

const initialState : IntitialState = {
    stars : 0 
}

export const star = createSlice({
    name: "star",
    initialState : initialState,
    reducers : {
        updateStars : (state, action: PayloadAction<number>) => {
            return {
                stars : action.payload
            }
        }
    }
})

export const {updateStars} = star.actions; 
export default star.reducer; 