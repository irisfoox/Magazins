import React from 'react'
import Home from './Home';
import NewPost from './NewPost'
import Signin from './Signin';
import Signup from './Signup';
import Login from './Login';
import {BrowserRouter as Router,
  Switch,Route} from 'react-router-dom';
import NewMag from './NewMag';

export default function Routing() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/newpost" component={NewPost}></Route>
                    <Route path="/newmag" component={NewMag}></Route>
                    <Route path="/signup" component={Signup}></Route>
                    <Route path="/signin" component={Signin}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </Router>
        </div>
    )
}
