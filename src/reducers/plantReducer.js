const initialState = {
    plant: {}
  }
  
  export default function plantReducer(state = initialState, action) {
      const { type, payload } = action
      
      if (type === 'FETCH_PLANT') {
          return {
              ...state,
              plant: payload
          }
      }
      return state
  }