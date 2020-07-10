import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ChangePassword from './pages/ChangePassword'
import Register from './pages/Register'
import MouseMan from './pages/MouseMan'
import Welcome from './pages/Welcome'
import ConfirmMail from './pages/ConfirmMail'
import {GlobalProvider} from './extra/context'
import AuthRoute from './extra/AuthRoute'
import NonAuthRoute from './extra/NonAuthRoute'

function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <Router>
        <Switch>
          <Route path={'/'} exact component={Welcome}/>
          <Route path={'/changepassword/:token&:mail'} exact component={ChangePassword}/>
          <NonAuthRoute path={'/login'} exact component={Login}/>
          <NonAuthRoute path={'/register'} exact component={Register}/>
          <AuthRoute path="/home" exact component={Home}/>
          <AuthRoute path="/MouseMan" exact component={MouseMan}/>
          <NonAuthRoute path={'/confirm'} exact component={ConfirmMail}/>
          <NonAuthRoute path={'/forgotpassword'} exact component={ForgotPassword}/>
        </Switch>
      </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
