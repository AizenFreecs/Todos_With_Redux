import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo,changeUpdateFlag,updateTodo } from '../features/todo/todoSlice'
function AddTodo() {
    const [input,setInput]  = useState("")
    
    const dispatch = useDispatch()
    const updateTodoItem = useSelector(state => state.updateItemContainer)
    const updateFlag = useSelector(state => state.updateFlag)


    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    const updateForm = () =>{
        setInput(updateTodoItem.text)
        console.log(updateTodoItem.text)
    }
    const updateTodoHandler = (e)=>{
        e.preventDefault()
        const todo = {
            id:updateTodoItem.id,
            text:input
        }
        dispatch(updateTodo(todo))
        dispatch(changeUpdateFlag(false))
        setInput("")
    }
    useEffect(() => {
      if(updateFlag==true){
        updateForm()
      }else{
        return
      }
    }, [updateFlag])
    


  return (<>
    <form onSubmit={!updateFlag ? addTodoHandler:updateTodoHandler} className="space-x-3 mt-12">
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      required
    />
    <button
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      {updateFlag ? "Update Todo":"Add Todo"}
    </button>
    
  </form>
  
  </>
  )
}

export default AddTodo