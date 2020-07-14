
const initState = {
  accounts: []
}

export default (state = initState, action) => {
  const { type, payload } = action
  if (type === 'FETCH_ACCOUNTS') {

    return {
      ...state,
      accounts: payload
    }
  }
  if (type === 'ADD_ACCOUNT') {
    return {
      ...state,
      accounts: [...state.accounts, payload]
    }
  }
  if (type === 'ADD_PLANT') {
    console.log('updated plant', payload)
    return {
      ...state,
      accounts: [...state.accounts, payload]
    }
  }

  return state
}
/*
export default function accountReducer(state = {accounts: []}, action) {
  
    switch (action.type) {
        case 'FETCH_ACCOUNTS':
        
          return {...state, accounts: action.payload}
          case 'ADD_ACCOUNT':
            
            return {...state, accounts: [...state.accounts, action.payload]}
          case 'ADD_PLANT':
              return {
                ...state,
                accounts: [...state.accoutn]
              }
        default:
          return state
    }
}*/