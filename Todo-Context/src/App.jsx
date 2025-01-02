import { useEffect, useState } from 'react';
import { TodoContextProvider } from './Context/TodoContext';
import {TodoForm,TodoItem} from './Components/index';

function App() {
  const [Todos,setTodos] = useState([]);

  const addTodo = (Todo) => {
    setTodos((prev)=> [...prev,{id:Date.now(),Todo,completed:false}]);
  }
  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((todo) => todo.id !== id));
  }
  const updateTodo = (id,Todo) => {
    setTodos((prev)=> prev.map((todo)=> todo.id === id ? {...todo,Todo:Todo} : todo));
  }
  const toggleCompleted = (id) => {
    setTodos((prev)=> prev.map((todo)=> todo.id===id?{...todo,completed:!todo.completed}:todo));
  }

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("Todos"));
    if(data && data.length>0){
      setTodos(data);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem("Todos",JSON.stringify(Todos));
  },[Todos]);

  return (
    <TodoContextProvider value = {{Todos,addTodo,deleteTodo,toggleCompleted,updateTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 bg-[#34598f] text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  <TodoForm /> 
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {Todos.map((todo)=>(
                    <div className='w-full' key={todo.id}>
                      <TodoItem todo={todo} />
                    </div>
                  ))}
              </div>
          </div>
      </div>
    </TodoContextProvider>
  )
}

export default App;