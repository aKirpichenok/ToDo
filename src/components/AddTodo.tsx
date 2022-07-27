import { FC, useState } from "react"
import { useAppDispatch } from "../hooks/hook";
import { addTodo } from "../store/todoSlice";

// interface AddTodoProps {
//     value: string;
//     updateText: (str: string) => void;
//     handleAction: () => void;
// }



const AddTodo: FC = () => {

    const [text, setText] = useState('')
    const dispatch = useAppDispatch()

    const handleActionChange = (e: any) => {
        setText(e.target.value)
    }

    const handleAction = () => {
        if(text.trim().length) {
            dispatch(addTodo(text))
            setText('')
        }
    }

    const handleKeyPress = (e: any) => {
        if(e.key == 'Enter') {
            handleAction()
        }
    }

    return (
        <label>
            <button className="button_addTodo" onClick = {handleAction}></button>
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