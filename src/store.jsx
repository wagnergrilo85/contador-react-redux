import { createStore } from 'redux'
import reducers from './reducer'

const configStore = () => {
    return createStore(
        reducers
    )
}
export default configStore