import React from 'react'
import {Redirect} from 'react-router-dom'

import PlantsContainer from '../containers/PlantsContainer'

const Account = (props) => {
    console.log(props)
    // let account = props.accounts[props.match.params.id - 1]
    let account = props.accounts ? props.accounts.filter(account => account.id == props.match.params.id)[0] : null

    return (
        <div>
            <h3>
                {/* {account? null : <Redirect to='/accounts'/>} */}
                {account ? account.name : null} - {account ? account.balance : null}
            </h3>
           <PlantsContainer account={account}/>
        </div>
    )

}

export default Account 