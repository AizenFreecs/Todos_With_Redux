import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeTodo,updateItem,changeUpdateFlag} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <div className="text-center text-2xl text-white p-2 m-2">Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-around items-center gap-2 bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white w-3/4'>{todo.text}</div>
            <button
             onClick={()=>{
                dispatch(updateItem(todo))
                dispatch(changeUpdateFlag(true))}}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              📁
            </button>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos