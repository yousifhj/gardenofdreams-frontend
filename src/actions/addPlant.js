export const addPlant = (plant, accountId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/accounts/${accountId}/plants`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(plant)
      })
      .then(response => response.json())
      .then(account => {
           dispatch({type: 'ADD_PLANT', payload: account})
        })
        .catch(err => {
            // console.log(err)
        })
    }
}