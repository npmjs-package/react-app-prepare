import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface counterState {
	count: number;
}

const initialState: counterState = {
	count: 0,
}

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		incremented(state) {
			state.count++
		},
		decremented(state) {
			state.count--
		},
		incrementedBy(state, action: PayloadAction<number>) {
			state.count += action.payload
		},
		reset(state) {
			state.count = 0
		},
	},
})

const counterReducer = counterSlice.reducer

export const { incremented, decremented, incrementedBy, reset } = counterSlice.actions
export default counterReducer
