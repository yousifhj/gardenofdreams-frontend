export function fetchPlant (id, callback) {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/plants/${id}`)
      .then(resp => resp.json())
      .then(plant => {
        dispatch({
            type: 'FETCH_PLANT',
            payload: plant
          })
          callback(plant)
      } )
    }
  }

  export const updatePlant = (data, callback) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/plants/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(plant => {
           dispatch({type: 'FETCH_PLANT', payload: plant})
           callback(null, plant)
        })
        .catch(err => {
            callback(err, null)
            // console.log(err)
        })
    }
}