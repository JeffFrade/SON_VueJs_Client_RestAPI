import HelloWorld from '@/components/HelloWorld'
import AccountsList from '../components/Accounts/List'
import AccountView from '../components/Accounts/View'
import AccountCreate from '../components/Accounts/Create'
import AccountEdit from '../components/Accounts/Edit'
import BanksList from '../components/Banks/List'
import Login from '../components/Login/Form'

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },

    {
        path: '/contas',
        component: AccountsList
    },

    {
        path: '/contas/novo',
        component: AccountCreate
    },

    {
        path: '/contas/:id',
        component: AccountView
    },

    {
        path: '/contas/:id/editar',
        component: AccountEdit
    },

    {
        path: '/bancos',
        component: BanksList
    },

    {
        path: '/login',
        component: Login
    }
]

export default routes