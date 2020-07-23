import React from 'react'
import {connect} from 'react-redux'
import {deletePlant} from '../actions/deletePlant'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'

const Plants = (props) => {

    const handleDelete = (plant) => {

        props.deletePlant(plant.id, plant.account_id)
    }

    return (
        <Row>
            <Col>
                <ListGroup>
                {
                    props.plants && props.plants.map(plant =>
                        <ListGroup.Item
                            key={plant.id}
                        >
                            <Row>
                                <Col md={9}>

                                    <p>
                                        {plant.name}
                                    </p>
                                   
                                </Col>
                                <Col md={3}>
                                    <Link className="btn btn-primary btn-sm" to={`/plants/${plant.id}`}>Edit</Link>
                                    <Button onClick={() => handleDelete(plant)} variant="danger" size="sm">Delete</Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Col>
        </Row>
    )
}

export default connect(null, {deletePlant})(Plants) 