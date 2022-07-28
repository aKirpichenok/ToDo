import React, { FC, useState } from "react"
import { useAppDispatch } from "../hooks/hook";
import { addTodo } from "../store/todoSlice";


const AddTodo: FC = () => {

    const [text, setText] = useState<string>('')
    const dispatch = useAppDispatch()

    const handleActionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handleAction = () => {
        if(text.trim().length) {
            dispatch(addTodo(text))
            setText('')
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            handleAction()
        }
    }

    return (
        <label>
            <button data-testid="value-addTodo" className="button_addTodo" onClick = {handleAction}></button>
            <input 
                type="text"
                placeholder="new todo"
                value={text}
                onChange={handleActionChange}
                onKeyPress = {handleKeyPress}
                />
        </label>
    )
}

export default AddTodo