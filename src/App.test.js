import { render, screen } from "@testing-library/react"
import App from "./App"
import { Provider } from 'react-redux';
import store from './store';

describe("TEST APP", () => {
    test('render title todo', () => {
        render(<Provider store={store}>
            <App />
        </Provider>
        )
        const title = screen.getByText(/todos/i)
        expect(title).toBeInTheDocument()
    })
})