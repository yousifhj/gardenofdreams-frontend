import React, { Component, Fragment } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchAccount} from '../actions/fetchAccounts'
import { Row, Col } from 'react-bootstrap'

import PlantsContainer from '../containers/PlantsContainer'
import { Link } from 'react-router-dom'
class Account extends Component {
    constructor (props) {
        super(props)
        this.state = {
            id: null
        }
    }
    componentWillMount () {
        this.setState({
            id: this.props.match.params.id
        })
    }
    componentDidMount () {
        const { id } = this.state
        this.props.fetchAccount(id)
    }
    render () {
        const { account } = this.props
        return (
            <Fragment>
                <Row>
                    <Col>
                        <Link to={'/'}>Back to Dashboard</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>
                            {/* {account? null : <Redirect to='/accounts'/>} */}
                            {account ? account.name : null} - ${account ? account.balance : null}
                        </h3>
                    </Col>
                </Row>
                <PlantsContainer account={account}/>
                
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      account: state.account.account
    }
  }

export default connect(mapStateToProps, {fetchAccount})(Account)