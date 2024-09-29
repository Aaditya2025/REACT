// In this file we are going to create reducers which is known as Slices.

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState, 
    reducers: {}
})