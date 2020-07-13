export default function accountReducer(state = {accounts: []}, action) {
  debugger
    switch (action.type) {
        case 'FETCH_ACCOUNTS':
          return {accounts: action.payload}
          case 'ADD_ACCOUNT':
            return {...state, accounts: [...state.accounts, action.payload]}
          case 'ADD_PLANT':
              return {}
        default:
          return state
    }
}