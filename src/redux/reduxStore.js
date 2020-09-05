import {createStore, combineReducers} from 'redux'
import languageReducer from './languageReducer'


const reducers = combineReducers({
    language: languageReducer
})

const store = createStore(reducers)
export default store;