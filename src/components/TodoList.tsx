import { FC } from "react";
import { useAppSelector } from "../hooks/hook";
import TodoItem from "./TodoItem";

interface TodoListProps {
    typeTodos: string
}


const TodoList: FC<TodoListProps> = ({ typeTodos }) => {

    const todos = useAppSelector(state => state.todos.list)

    const filterTodos = () => {
        if(typeTodos === 'All') return todos
        if(typeTodos === 'Active') return todos.filter(todo => todo.completed === false)
        if(typeTodos === 'Completed') return todos.filter(todo => todo.completed === true)

    }

    return (
        <ul>
            {filterTodos()?.map((todo: any) => 
            <TodoItem
            key={todo.id}
            {...todo}
            />)}
        </ul>
    )
}

export default TodoList