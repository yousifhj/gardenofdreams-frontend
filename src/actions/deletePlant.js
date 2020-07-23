export const deletePlant = (plantId, accountId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/accounts/${accountId}/plants/${plantId}`, {
            method: 'DELETE'
        })
        .then(responce => responce.json())
        .then(account => dispatch({type: 'DELETE_PLANT', payload: account}))
    }
}