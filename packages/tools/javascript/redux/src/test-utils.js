import { render as rtlRender } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
const render = (ui, options = {}) => {
	const {
		preloadedState,
		store = configureStore({
			reducer: {
				counterSlice: counterReducer,
			},
			preloadedState,
		}),
		...renderOptions
	} = options

	const Wrapper = ({ children }) => {
		return <Provider store={store}>{children}</Provider>
	}
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
// override render method
export { render }
