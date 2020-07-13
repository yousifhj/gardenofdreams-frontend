import React from 'react'
import {connect} from 'react-redux'
import {addPlant} from '../actions/addPlant'

class PlantInput extends React.Component {

    state = { 
        kinda: 'gifted',
        name: '',
        price: '',
        description: '',
    
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPlant(this.state, this.props.account.id)
        this.setState({
            kinda: 'gifted',
            name: '',
            price: '',
            description: '',
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Plant Type:</label>
                    <select name="kinda" value={this.state.kind} onChange={this.handleChange}>
                        <option>gift</option>
                        <option>gifted</option>
                    </select>
                    <label>Plant Name:</label>
                    <input type="text" name="name"value={this.state.name} onChange={this.handleChange}></input>
                    <label>Plant Price:</label>
                    <input type="text" name="price"value={this.state.price} onChange={this.handleChange}></input>
                    <label>Plant Description:</label>
                    <textarea type="text" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default connect(null, {addPlant}) (PlantInput)