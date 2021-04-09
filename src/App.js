import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './sideBar';

function App() { 
  return (
    <div className="App">
        <Header/>

        {/* App body */}
       {/* left side bar */}
       <div className='app__body'>
       <SideBar/>
       
       </div>

        {/* Feed */}

        {/* Widgets */}
    </div>
  );
}

export default App;
