import React, { useContext } from 'react'
import './Head.scss'
import Logout from './Logout'
import {Link} from 'react-router-dom'
import {checkAuth} from '../extra/helpers'
import { GlobalContext } from '../extra/context'

const Head = (): JSX.Element  => {
    const {state} = useContext<any>(GlobalContext) 
    return (
        <div className="head">
            <Link to={'/'} className="logo">&copy;</Link>
            <div className="menu">
                {!checkAuth() && <Link to={'/login'} className="menu-login">Login</Link>}
                {!checkAuth() && <Link to={'/register'} className="menu-register">Register</Link>}
                {checkAuth() && <Link to={'/home'} className="menu-home">Home</Link>}
                {checkAuth() && <Link to={'/MouseMan'} className="menu-home">MouseMan</Link>}
                {checkAuth() && <Logout/>}
            </div>
            {checkAuth() && <div className="account">{state.user.userData.name}</div>}
        </div>
    )
}

export default Head

