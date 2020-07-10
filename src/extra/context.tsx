import React, {createContext, useReducer, useEffect} from 'react'
import {userReducer} from './reducer'
import {checkAuth} from './helpers'

const initialState = {
    user: {
        isAuthenticated: false,
        token: '',
        userData: {}
    }
}

const GlobalContext = createContext<any>({state: initialState, dispatch: () => {}})

const mainReducer = ({ user }: any, action: any) => ({
    user: userReducer(user, action),
    // shoppingCart: shoppingCartReducer(shoppingCart, action),
  });
console.log(checkAuth())
const GlobalProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);
    console.log(state)
    // useEffect(() => {
    //     console.log(checkAuth())
    //     if(!checkAuth()) {
    //     localStorage.removeItem('token')
    //         dispatch({
    //             type: "LOGOUT",
    //             payload: {
    //                 isAuthenticated: false,
    //                 token: '',
    //                 userData: {}
    //             }
    //         })
    //     }
    // }, [checkAuth()])
    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
        )
}
export {GlobalProvider, GlobalContext};
