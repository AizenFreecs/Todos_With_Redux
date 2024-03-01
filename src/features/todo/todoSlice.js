import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
    todos:[],
    updateItemContainer:{},
    updateFlag:false
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id: nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id != action.payload)
        },
        updateTodo:(state,action)=>{
            state.todos.map((todo)=>{
                console.log(todo.id,action.payload.id)
                if(todo.id==action.payload.id){
                    console.log("match found")
                    console.log(action.payload.text)
                    todo.text = action.payload.text
                }            
                
        })
        },
        updateItem:(state,action)=>{
            const item = {
                id:action.payload.id,
                text:action.payload.text
            }
            state.updateItemContainer = item
            
        },
        changeUpdateFlag:(state,action)=>{
            state.updateFlag = action.payload
        }      
    }
})

export const {addTodo,removeTodo,changeUpdateFlag,updateTodo,updateItem}  = todoSlice.actions

export default todoSlice.reducer