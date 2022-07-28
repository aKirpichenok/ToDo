import { text } from "stream/consumers"
import todoSlice, { addTodo, removeTodo, toggleComplete } from "./todoSlice"

describe('TodoSlice test', () => {
    test('add todo', () => {
        const date = new Date().toISOString()
        expect(todoSlice({ list: [] }, addTodo({ date, text: 'coffee' }))).toEqual({
            list: [{
                id: date,
                title: "coffee",
                completed: false,
            }]
        })
    })

    test('remove todo', () => {
        const date = new Date().toISOString()
        addTodo({ date, text: 'coffee' })
        expect(todoSlice({ list: [{ id: date, title: 'coffee', completed: false }] }, removeTodo(date))).toEqual({ list: [] })
    })

    test('toggle complete', () => {
        const date = new Date().toISOString()
        addTodo({ date, text: 'coffee' })
        expect(todoSlice({ list: [{ id: date, title: 'coffee', completed: false }] }, toggleComplete(date)))
            .toEqual({ list: [{ id: date, title: 'coffee', completed: true }] })
    })
})