import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/hook"
import { removeAllTodo } from "../store/todoSlice"

interface TodoFooterProps {
    updateType: (str: string) => void
}


const TodoFooter: FC<TodoFooterProps> = ({ updateType }) => {
    const activeTodos: any = useAppSelector(state => state.todos.list).filter(todo => todo.completed == false)
    const dispatch = useAppDispatch()

    return (
        <div className="TodoFooter">
            <div>{activeTodos.length} <span>item{activeTodos.length> 1 ? 's' : ''} left</span></div>
            <div className="footer_buttons">
                <button className="footer_button" onClick={() => updateType('All')}>All</button>
                <button className="footer_button" onClick={() => updateType('Active')}>Active</button>
                <button className="footer_button" onClick={() => updateType('Completed')}>Completed</button>
            </div>
            <div>
                <button className="footer_button" onClick={() => dispatch(removeAllTodo())}>Clear Completed</button>
            </div>
        </div>
    )
}

export default TodoFooter