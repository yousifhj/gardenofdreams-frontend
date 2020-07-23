import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {addAccount} from '../actions/addAccount'

import { Form, Button, Row, Col, Toast } from 'react-bootstrap'

class AccountInput extends React.Component {

    state = { 
      name: '',
      balance: '',
      showToast: false
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
      event.preventDefault()
      this.props.addAccount(this.state, (err, suc) => {
        if (suc) {
          this.setState({ 
            name: '',
            balance: '',
            showToast: true
          }) 
        }
      })
        
    }

    render() {
        
        return (
          <div>
            <Toast onClose={() => this.setState({ showToast: false })} show={this.state.showToast} delay={3000} autohide>
              <Toast.Body>Account was created successfully!</Toast.Body>
            </Toast>
            <Row>
              <Col>
                <Link to={'/'}>Back to Dashboard</Link>
              </Col>
            </Row>
            <Row>
              <Col xs={5}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                      <Form.Label>Garden of Dreams Name:</Form.Label>
                      <Form.Control  size="sm" type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Balance</Form.Label>
                      <Form.Control  size="sm" type="text" placeholder="Balance" value={this.state.balance} name="balance" onChange={this.handleChange}/>
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

    export default connect(null, {addAccount})(AccountInput)