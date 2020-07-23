import React, { Component, Fragment } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import {
    fetchPlant,
    updatePlant
} from '../actions/fetchPlant'

class Plant extends Component {
    constructor (props) {
        super(props)
        this.state = {
            id: null,
            description: '',
            kind: 'gift',
            name: '',
            price: 0,
            account_id: null
        }
    }
    componentWillMount () {
        this.setState({
            id: this.props.match.params.id
        })
    }
    componentDidMount () {
        const { id } = this.state
       
       this.props.fetchPlant(id, cb => {
           this.setState(
            Object.assign({}, this.state, this.props.plant)
           )
       })
    }

    handleChange = property => evt => {
        this.setState({
            [property]: evt.target.value
        })
    }

    handleSubmit = (e) => {
        const { id, kind, name, price, description, account_id } = this.state
        e.preventDefault()
        this.props.updatePlant({
            id,
            kind, 
            name,
            price, 
            description
        }, (err, suc) => {
            if (suc) {
                this.props.history.push(`/accounts/${account_id}`)
            }
        })

    }
    render () {
        const { kind, name, price, description, account_id } = this.state

        return (
            <Fragment>
                <Row>
                    <Col>
                        <Link to={`/accounts/${account_id}`}>Back to Account</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Edit Plant</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Plant Type</Form.Label>
                                <Form.Control as="select" value={kind} onChange={this.handleChange('kind')}>
                                    <option>gift</option>
                                    <option>gifted</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" value={name} onChange={this.handleChange('name')}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Price" value={price} onChange={this.handleChange('price')}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" value={description} onChange={this.handleChange('description')} />
                            </Form.Group>
                        
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
               
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      plant: state.plant.plant
    }
  }

export default connect(mapStateToProps, {
    fetchPlant,
    updatePlant
})(Plant)