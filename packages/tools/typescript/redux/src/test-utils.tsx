import { render as rtlRender } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import { RootState, store } from './app/store'

interface WrapperProps {
	children: ReactNode
}

interface RenderOptionsProps {
	preloadedState?: RootState
	store?: typeof store
	[key: string|number|symbol]: any
}

const render = (
	ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
	options: RenderOptionsProps = {}
) => {
	const {
		preloadedState,
		store = configureStore({
			reducer: {
				counterSlice: counterReducer
			},
			preloadedState
		}),
		...renderOptions
	} = options

	const Wrapper: React.FC<WrapperProps> = ({ children }) => {
		return <Provider store={store}>{children}</Provider>
	}
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
// override render method
export { render }
