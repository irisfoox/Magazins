import React from 'react'
import './App.css';
//import PagesBar from './Components/PagesBar'
import UpperMenu from './Components/UpperMenu'
import ShowPosts from './Components/showPosts'

function App() {
  return (
    <div>
      <UpperMenu/>
      <ShowPosts></ShowPosts>
    </div>
  );
} 
 
export default App;
