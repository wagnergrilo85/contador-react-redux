import { combineReducers } from 'redux'
import contadorReducer from './ContadorReducer'

export default combineReducers({

    // data: dataReducer
    contadorReducer: contadorReducer
})