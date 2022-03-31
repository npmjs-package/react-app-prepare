import Counter from '../features/Counter'

const AppContext = {
	COUNTER: new Counter()
}

const useAppSelector = () => AppContext

export default useAppSelector
