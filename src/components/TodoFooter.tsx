import { FC, useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/hook"
import { removeAllTodo } from "../store/todoSlice"

interface TodoFooterProps {
    updateType: (str: string) => void
}


const TodoFooter: FC<TodoFooterProps> = ({ updateType }) => {
    const todos = useAppSelector(state => state.todos.list)
    const dispatch = useAppDispatch()
    const [active, setActive] = useState<string>('All')

    const handleClick = (type: string)  => {
        updateType(type)
        setActive(type)
    }

    const countTodos = (type: string) => {
        if(type === "Completed") return todos.filter(todo => todo.completed === true)
        return todos.filter(todo => todo.completed === false)
    }

    return (
        <div className="TodoFooter">
            {
            active !== 'Completed' ?
            <div className="TodoFooter_items">
                {countTodos('Active').length}<span>item{countTodos('Active')?.length> 1 ? 's' : ''} left</span>
            </div> :
            <div className="TodoFooter_items">
                {countTodos('Completed').length}<span>item{countTodos('Completed').length> 1 ? 's' : ''} done</span>
            </div>
            }
            <div className="footer_buttons">
                <button className={`${active === 'All' ? 'footer_button active' : 'footer_button'}`} onClick={() => handleClick('All')}>All</button>
                <button className={`${active === 'Active' ? 'footer_button active' : 'footer_button'}`} onClick={() => handleClick('Active')}>Active</button>
                <button className={`${active === 'Completed' ? 'footer_button active' : 'footer_button'}`} onClick={() => handleClick('Completed')}>Completed</button>
            </div>
            <div>
                <button className="footer_button" onClick={() => dispatch(removeAllTodo())}>Clear Completed</button>
            </div>
        </div>
    )
}

export default TodoFooter