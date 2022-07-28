import { useState } from "react"
import AddTodo from "./AddTodo"
import TodoFooter from "./TodoFooter"
import TodoList from "./TodoList"

const TodosBlock = () => {
    const [typeTodos, setTypeTodos] = useState('All')
    

    const updateListTodos = (str: string) => {
            setTypeTodos(str)
    }
    return (
        <div className="TodosBlock">
            <AddTodo/>
            <TodoList 
            typeTodos={typeTodos}
            />
            <TodoFooter 
            updateType={updateListTodos}
            />
        </div>
    )
}

export default TodosBlock