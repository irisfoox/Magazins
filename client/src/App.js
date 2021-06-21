import React from 'react'
import './App.css';
import PagesBar from './Components/PagesBar'
import UpperMenu from './Components/UpperMenu'
//import NewPost from './Components/NewPost'
/*import {BrowserRouter as Router,
  Switch,Route} from 'react-router-dom'*/

  /*<Router>
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
</Router>*/

function App() {
  return (
    <div>
      <UpperMenu/>
      <PagesBar/>
    </div>
  );
} 
 
export default App;
