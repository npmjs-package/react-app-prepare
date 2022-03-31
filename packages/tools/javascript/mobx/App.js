import React from 'react'
import logo from './assets/images/logo.svg'
import './assets/css/app.css'
import { observer } from 'mobx-react'
import useAppSelector from './app/store'

const App = observer(() => {
	const { COUNTER } = useAppSelector()
	const { count, increment, decrement, incrementBy, reset } = COUNTER
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
})

export default App
