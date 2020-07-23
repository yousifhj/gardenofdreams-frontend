import React from 'react'
import {connect} from 'react-redux'
import {addPlant} from '../actions/addPlant'
import {Form, Button, Col, Row} from 'react-bootstrap'
class PlantInput extends React.Component {

    state = { 
        kind: 'gifted',
        name: '',
        price: '',
        description: '',
    
    }

    handleChange = property => (event) => {
        this.setState({
            [property]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPlant(this.state, this.props.account.id)
        this.setState({
            kind: 'gifted',
            name: '',
            price: '',
            description: '',
        })
    }

    render() {
        const { name, kind, description, price } = this.state 
        return (
            <div>
                <Row>
                    <Col xs={7}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Plant Type:</Form.Label>
                                <Form.Control  size="sm" as="select" value={kind} onChange={this.handleChange('kind')}>
                                    <option>gift</option>
                                    <option>gifted</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Name:</Form.Label>
                                <Form.Control  size="sm" type="text" placeholder="Name" value={name} onChange={this.handleChange('name')}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Price:</Form.Label>
                                <Form.Control  size="sm" type="text" placeholder="Price" value={price} onChange={this.handleChange('price')}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Description:</Form.Label>
                                <Form.Control  size="sm" as="textarea" rows="3" value={description} onChange={this.handleChange('description')} />
                            </Form.Group>
                        
                            <Button variant="success" type="submit" size="sm">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
           
        )
    }

}

export default connect(null, {addPlant}) (PlantInput)