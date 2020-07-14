import React from 'react' 
import {Route, Link} from 'react-router-dom'
import Account from './Account'

const Accounts = (props) => {

    return (
        <div> 
             {props.accounts && props.accounts.map(account =>
             <div key={account.id}>
                 <Link to ={`/accounts/${account.id}`}> {account.name}</Link>
             </div> )}

        </div>
    )

}

export default Accounts
