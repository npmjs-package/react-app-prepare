import { makeAutoObservable } from 'mobx'

class Counter {
	// Member Variables
	public count: number

	// Setter Functions
	// Note: Never use setter function outside current class, just to keep better consistancy
	private setCount(value: number) {
		this.count = value
	}

	// Class Constructors
	constructor() {
		this.count = 0
		makeAutoObservable(this)
	}

	// Feature Functions
	public increment = () => {
		this.setCount(this.count + 1)
	}
	public decrement = () => {
		this.setCount(this.count - 1)
	}
	public incrementBy = (amount: number) => {
		this.setCount(this.count + amount)
	}
	public reset = () => {
		this.setCount(0)
	}
}

export default Counter
