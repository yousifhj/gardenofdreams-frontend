import React from 'react'

    const Plants = (props) => {

        console.log(props.plants)

        return (
            <div>
                {props.plants && props.plants.map(plant =>
                   <li key={plant.id}>{plant.kind} - {plant.name} - {plant.price} - {plant.description} - {plant.date}</li>
                   )}
            </div>
        )
    }

export default Plants 