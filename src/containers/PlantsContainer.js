import React from 'react'
import PlantInput  from '../components/PlantInput'
import Plants from '../components/Plants'

class PlantsContainer extends React.Component {

    render() {

        return (
            <div>
                <PlantInput account={this.props.account}/>
                <Plants plants={this.props.account && this.props.account.plants}/>
            </div>
        )
    }

}

export default PlantsContainer 