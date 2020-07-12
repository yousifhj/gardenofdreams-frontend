import React from 'react'

const Account = (props) => {

    console.log(props)
    return (
        <li>
          {props.account.name}  - {props.account.balance}
        </li>
    )

}

export default Account