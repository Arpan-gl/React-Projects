import { createContext,useContext } from "react";

export const TodoContext = createContext({
    Todos:[
        {
            id:1,
            Todo:"Learn React",
            completed:false
        }
    ],
    addTodo : (Todo) => {},
    deleteTodo : (id) => {},
    toggleCompleted : (id) => {},
    updateTodo : (id,Todo) => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider;