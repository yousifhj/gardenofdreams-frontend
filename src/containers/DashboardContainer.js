import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchAccounts} from '../actions/fetchAccounts'
import { Row, Col, ListGroup } from 'react-bootstrap'

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchAccounts()
    }
    render () {
        const { accounts } = this.props

        return (
            <div>
                <Row>
                    <Col>
                        <Link to={`/accounts/new`}>Input account</Link>
                    </Col>
                </Row>
                <Row>

                    <Col xs={12}>
                        <ListGroup>
                            {
                                accounts.map(account => (
                                    <ListGroup.Item key={account.id}>
                                        <Link to={`/accounts/${account.id}`}>{account.name}</Link>
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      accounts: state.account.accounts
    }
  }

export default connect(mapStateToProps, {fetchAccounts})(Dashboard)