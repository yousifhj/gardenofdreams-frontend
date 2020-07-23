const initialState = {
  accounts: [],
  account: {}
}

export default function accountReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_ACCOUNTS':
          return {accounts: action.payload}
        case 'ADD_ACCOUNT':
            return {...state, accounts: [...state.accounts, action.payload]}
        case 'ADD_PLANT':
            return {...state, account: action.payload}
        case 'DELETE_PLANT':
          return {...state, account: action.payload}
        case 'FETCH_ACCOUNT':
          return {
            ...state,
            account: action.payload
          }
        default:
          return state
    }
}