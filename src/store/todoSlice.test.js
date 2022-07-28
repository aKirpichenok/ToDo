import todoSlice, { addTodo } from "./todoSlice"

describe('TodoSlice test', () => {
    test('add todo', () => {
        expect(todoSlice({ list: [] }, addTodo('coffee'))).toContain({
            list: [{
                title: "coffee",
                completed: false,
            }]
        })
    })
})