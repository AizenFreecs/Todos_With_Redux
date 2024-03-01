import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
      <div className="min-h-screen  w-full py-8 flex align-middle justify-center"
     style={{
      backgroundImage: `url('https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
     }}>
      <div className="bg-slate-600 bg-opacity-40 p-4 max-h-fit">
      <AddTodo />
      <Todos />
      </div>
      
    </div></>
  )
}

export default App
