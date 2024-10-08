// In this file we are going to create reducers which is known as Slices.

import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",

    initialState:{
        todos: [{id: 1, text: "Hello World"}]
    }, 

    reducers: {
        addTodo: (state, action) => {
            const todo={
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer