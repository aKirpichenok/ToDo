import { removeTodo, toggleComplete } from "../store/todoSlice";
import { useAppDispatch } from "../hooks/hook";
import { FC } from "react";

interface TodoItemProps {
    id: string;
    title: string;
    completed: boolean;
}


const TodoItem: FC<TodoItemProps> = ({ id, title, completed}) => {
    const dispatch = useAppDispatch()

    return (
        <li>
            <label>
            <input 
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleComplete(id))}
            />
            <span className="pseudocheckbox"></span>
            </label>
            <span data-testid="value-title" className={`${completed ? 'completed' : ''}`}>{title}</span>
            <span className="remove_todo" onClick={() => dispatch(removeTodo(id))}>&times;</span>
        </li>
    )
}

export default TodoItem;