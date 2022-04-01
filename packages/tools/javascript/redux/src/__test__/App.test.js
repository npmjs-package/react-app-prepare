import { fireEvent, render, screen } from '../test-utils'
import App from '../App'

it('renders react counter', () => {
	render(<App />)
	const page_title = screen.getByText(/react counter/i)
	expect(page_title).toBeInTheDocument()
})

it('renders count with zero', () => {
	render(<App />)
	const count = screen.getByRole('count')
	expect(count.innerHTML).toBe('0')
})

it('renders buttons', () => {
	render(<App />)
	const incrementButton = screen.getByText(/^increase$/i)
	const decrementButton = screen.getByText(/^decrease$/i)
	const incrementBy5Button = screen.getByText(/^increase by 5$/i)
	const resetButton = screen.getByText(/^reset$/i)
	expect(incrementButton).toBeInTheDocument()
	expect(decrementButton).toBeInTheDocument()
	expect(incrementBy5Button).toBeInTheDocument()
	expect(resetButton).toBeInTheDocument()
})

it('click increment button', () => {
	render(<App />)
	const incrementButton = screen.getByText(/^increase$/i)
	const count = screen.getByRole('count')
	fireEvent.click(incrementButton)
	expect(count.innerHTML).toBe('1')
})

it('click decrement button', () => {
	render(<App />, {
		preloadedState: {
			counterSlice: { count: 3 },
		},
	})
	const decrementButton = screen.getByText(/^decrease$/i)
	const count = screen.getByRole('count')
	fireEvent.click(decrementButton)
	expect(count.innerHTML).toBe('2')
})

it('click increment by 5 button', () => {
	render(<App />)
	const incrementBy5Button = screen.getByText(/^increase by 5$/i)
	const count = screen.getByRole('count')
	fireEvent.click(incrementBy5Button)
	expect(count.innerHTML).toBe('5')
})

it('click buttons in combination', () => {
	render(<App />)
	const incrementButton = screen.getByText(/^increase$/i)
	const decrementButton = screen.getByText(/^decrease$/i)
	const incrementBy5Button = screen.getByText(/^increase by 5$/i)
	const resetButton = screen.getByText(/^reset$/i)

	const count = screen.getByRole('count')
	fireEvent.click(incrementButton)
	expect(count.innerHTML).toBe('1')
	fireEvent.click(decrementButton)
	fireEvent.click(decrementButton)
	expect(count.innerHTML).toBe('-1')
	fireEvent.click(incrementBy5Button)
	expect(count.innerHTML).toBe('4')
	fireEvent.click(resetButton)
	expect(count.innerHTML).toBe('0')
})
