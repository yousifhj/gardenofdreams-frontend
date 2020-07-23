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
            let accounts = state.accounts.map(account => {
              if (account.id === action.payload.id) {
                return action.payload
              } else {
                return account
              }
            })
            return {...state, accounts: accounts}
        case 'DELETE_PLANT':
              let accountsPlants = state.accounts.map(account => {
                if (account.id === action.payload.id) {
                  return action.payload
                } else {
                  return account
                }
              })
              return {...state, accounts: accountsPlants}
        case 'FETCH_ACCOUNT':
          return {
            ...state,
            account: action.payload
          }
        default:
          return state
    }
}