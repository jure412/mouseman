import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom';
import {checkAuth} from './helpers'
import { useContext } from 'react';
import { GlobalContext } from './context';

interface IPrivate{
    [rest: string]: any; 
    component: any;
}


const NonAuthRoute = ({ component: Component, ...rest}: IPrivate) => {
    const {dispatch} = useContext<any>(GlobalContext)

    useEffect(() => {
        if(!checkAuth()) {
            localStorage.removeItem('token')
            dispatch({
                type: "LOGOUT",
                payload: {
                    isAuthenticated: false,
                    token: '',
                    userData: {}
                }
            })
        }
    },[])
    return (<Route {...rest} render={() => !checkAuth() ? (<Component/>) : (<Redirect to={{ pathname: "/login" }} /> )}/>)

};
export default NonAuthRoute;
