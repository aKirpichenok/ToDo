import { FC } from "react";
import { useAppSelector } from "../hooks/hook";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: any
}


const TodoList: FC<TodoListProps> = ({ todos }) => {
    // const todos = useAppSelector(state => state.todos.list)


    return (
        <ul>
            {todos.map((todo: any) => 
            <TodoItem
            key={todo.id}
            {...todo}
            />)}
        </ul>
    )
}

export default TodoList