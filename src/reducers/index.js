import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import account from './accountReducer'
import plant from './plantReducer'

const rootReducer = (history) => combineReducers({
    account,
    plant,
    router: connectRouter(history)
})

export default rootReducer