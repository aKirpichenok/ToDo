import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Todo = {
    id: string;
    title: string;
    completed: boolean;
}

type TodosState = {
    list: Todo[];
}

const initialState: TodosState = {
    list: []
}

const todoSlice = createSlice ({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<{date:string;text:string}>) {
            const {date,text} = action.payload
            state.list.push({
                id: date,
                title: text,
                completed: false,
            });
        },
        toggleComplete(state, action: PayloadAction<string>) {
            const toggleTodo = state.list.find(todo => todo.id === action.payload)
            if(toggleTodo){
            toggleTodo.completed = !toggleTodo.completed
        }
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.list  = state.list.filter(todo => todo.id !== action.payload)
        },
        removeAllTodo(state) {
            state.list = state.list.filter(todo => todo.completed !== true)
        }
    }
});

export const { addTodo, toggleComplete, removeTodo, removeAllTodo } = todoSlice.actions

export default todoSlice.reducer