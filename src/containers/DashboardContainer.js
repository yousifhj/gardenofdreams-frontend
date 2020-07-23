import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchAccounts} from '../actions/fetchAccounts'
import { Row, Col, ListGroup } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import LikeButton from '../components/LikeButton';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchAccounts()
    }
    render () {
        const { accounts } = this.props

        return (
            <div>
                <h2 class="display-3"> Welcome to Garden of Dreams </h2>
                <p class="text-center"> We've got this gift of love, but love is like a precious plant. You can't just accept it and leave it in the cupboard or just think it's going to get on by itself. You've got to keep watering it. You've got to really look after it and nurture it</p>
                <Row>
                    <Col>
                        <Link to={`/accounts/new`}>Create a New Account</Link>
                    </Col>
                </Row>
                <Row >
                    <Col >
                        <ListGroup>
                            {
                                accounts.map(account => (
                                    <ListGroup.Item key={account.id}>
                                        <div style={{flex: 1, justifyContent: 'space-between'}}>
                                            <Link to={`/accounts/${account.id}`} style={{flex: 1}}>{account.name}</Link>
                                            <LikeButton />
                                        </div>
                                        
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} md={3}>
                        <Image src="https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Aglaonema-Wintery-Winehouse-Cylinder-Pot-Small_1000x1000.jpg?v=1586362692" fluid/>
                    </Col>
                    <Col xs={2} md={3}>
                        <Image src="https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Syngonium-Glo-Go-Cylinder-Pot-Small_1000x1000.jpg?v=1586789952" fluid />
                    </Col>
                    <Col xs={2} md={3}>
                        <Image src="https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Spathiphyllum-Peace-Lily-Sweet-Chico-Cylinder-Pot-Small_1000x1000.jpg?v=1586367770" fluid />
                    </Col>
                    <Col xs={2} md={3}>
                        <Image src="https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Syngonium-Arrowhead-Vine-White-Butterfly-Cylinder-Pot-Small_1000x1000.jpg?v=1586362162" fluid />
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