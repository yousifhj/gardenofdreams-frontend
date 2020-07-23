//import AccountsContainer from './containers/AccountsContainer'
import Dashboard from './containers/DashboardContainer'
import AccountInput from './components/AccountInput'
import Account from './components/Account'
import Accounts from './components/Accounts'
import Plant from './components/Plant'
const routes = [
    {
        path: '/',
        exact: true,
        component: Dashboard
    },
    {
        path: '/accounts/new',
        exact: true,
        component: AccountInput
    },
    {
        path: '/accounts/:id',
        exact: true,
        component: Account
    },
    {
        path: '/accounts',
        exact: true,
        component: Accounts
    },
    {
        path: '/plants/:id',
        exact: true,
        component: Plant
    }
]

export default routes