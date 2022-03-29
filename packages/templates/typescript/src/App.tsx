import React, { useState } from 'react'
import logo from './assets/images/logo.svg'
import './assets/css/app.css'

const App: React.FC = () => {
	const [count, setCount] = useState<number>(0)

	const increment = () => {
		setCount(count + 1)
	}
	const decrement = () => {
		setCount(count - 1)
	}
	const incrementBy = (amount: number) => {
		setCount(count + amount)
	}
	const reset = () => {
		setCount(0)
	}

	return (
		<header className="app-header">
			<img className="logo" src={logo} alt="logo" />
			<h1 className="app-title">React Counter</h1>
			<h1 className="app-count">{count}</h1>
			<div className="buttons">
				<button onClick={increment}>Increase</button>
				<button onClick={decrement}>Decrease</button>
				<button onClick={() => incrementBy(5)}>Increase By 5</button>
				<button onClick={reset}>Reset</button>
			</div>
		</header>
	)
}

export default App
