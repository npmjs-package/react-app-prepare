import React, { useState } from 'react'
import logo from './assets/images/logo.svg'
import './assets/css/app.css'

const App = () => {
	const [count, setCount] = useState(0)

	const increament = () => {
		setCount(count + 1)
	}
	const decreament = () => {
		setCount(count - 1)
	}
	const increamentBy = (amount) => {
		setCount(count + amount)
	}
	const reset = () => {
		setCount(0)
	}

	return (
		<header className="app-header">
			<img className="logo" src={logo} alt="logo" />
			<h1 className="app-title">React Counter</h1>
			<h1 className="app-count" role="count">
				{count}
			</h1>
			<div className="buttons">
				<button onClick={increament}>Increase</button>
				<button onClick={decreament}>Decrease</button>
				<button onClick={() => increamentBy(5)}>Increase By 5</button>
				<button onClick={reset}>Reset</button>
			</div>
		</header>
	)
}

export default App
