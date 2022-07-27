import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/hook"
import { addTodo } from "../store/todoSlice"
import AddTodo from "./AddTodo"
import TodoFooter from "./TodoFooter"
import TodoList from "./TodoList"

const TodosBlock = () => {
    const [typeTodos, setTypeTodos] = useState('All')
    const todos = useAppSelector(state => state.todos.list)



    const filterTodos = () => {
        if(typeTodos === 'All') return todos
        if(typeTodos === 'Active') return todos.filter(todo => todo.completed === false)
        if(typeTodos === 'Completed') return todos.filter(todo => todo.completed === true)

    }

    const updateListTodos = (str: string) => {
            setTypeTodos(str)
            filterTodos()
    }
    return (
        <div className="TodosBlock">
            <AddTodo/>
            <TodoList 
            todos={filterTodos()}
            />
            <TodoFooter 
            updateType={updateListTodos}
            />
        </div>
    )
}

export default TodosBlock