import { makeAutoObservable } from 'mobx'

class Counter {
	// Member Variables
	count = 0

	// Setter Functions
	// Note: Never use setter function outside current class, just to keep better consistancy
	setCount(value) {
		this.count = value
	}

	// Class Constructors
	constructor() {
		makeAutoObservable(this)
	}

	// Feature Functions
	increment = () => {
		this.setCount(this.count + 1)
	}
	decrement = () => {
		this.setCount(this.count - 1)
	}
	incrementBy = (amount) => {
		this.setCount(this.count + amount)
	}
	reset = () => {
		this.setCount(0)
	}
}

export default Counter
