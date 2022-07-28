import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"
import { Provider } from 'react-redux';
import store from './store';
import userEvent from "@testing-library/user-event";

describe("TEST APP", () => {
    test('render title todo', () => {
        render(<Provider store={store}>
            <App />
        </Provider>
        )
        const title = screen.getByText(/todos/i)
        const placeholder = screen.getByPlaceholderText(/new todo/i)
        expect(title).toBeInTheDocument()
        expect(placeholder).toBeInTheDocument()
    })
})