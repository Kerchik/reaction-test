import {createStore, combineReducers} from 'redux'
import languageReducer from './languageReducer'
import reactionTestReducer from './reactionTestReducer'


const reducers = combineReducers({
    language: languageReducer,
    reactionTest: reactionTestReducer
})

const store = createStore(reducers)
export default store;