import {createStore} from 'redux'
import ItemReducer from './reducers/itemReducer'

const store = createStore(ItemReducer)

export default store