import React from 'react'
import logo from './assets/images/logo.svg'
import './assets/css/app.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { decremented, incremented, incrementedBy, reset } from './features/counter/counterSlice'

const App: React.FC = () => {
	const dispatch = useAppDispatch()
	const { counterSlice } = useAppSelector()
	const { count } = counterSlice

	return (
		<header className="app-header">
			<img className="logo" src={logo} alt="logo" />
			<h1 className="app-title">React Counter</h1>
			<h1 className="app-count" role="count">
				{count}
			</h1>
			<div className="buttons">
				<button onClick={() => dispatch(incremented())}>Increase</button>
				<button onClick={() => dispatch(decremented())}>Decrease</button>
				<button onClick={() => dispatch(incrementedBy(5))}>Increase By 5</button>
				<button onClick={() => dispatch(reset())}>Reset</button>
			</div>
		</header>
	)
}

export default App
