import React from 'react'
import './App.css';
import PagesBar from './Components/PagesBar'
import UpperMenu from './Components/UpperMenu'
import NewPost from './Components/NewPost'
import {BrowserRouter as Router,
  Switch,Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <div><Route path="/UpperMenu">
        <UpperMenu/>
        </Route>
        <Switch>
          <Route path="/PagesBar">
          <PagesBar/>
          </Route>
          <Route path="/NewPost">
          <NewPost/>
          </Route>
      </Switch>
      </div> 
      </Router>
    </div>
  );
} 
 
export default App;
