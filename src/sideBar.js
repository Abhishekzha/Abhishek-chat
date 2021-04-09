import React from 'react';
import './sideBar.css';
import {Avatar} from '@material-ui/core';

const SideBar = () => {
    return (
        <div className='sideBar'>
            <div className='sideBar__top'>
            <img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="cover" />
            <Avatar className='sideBar__avatar'/>
            <h2>Abhishek Jha</h2>
            <h4>Abhishekzha@gmail.com</h4>
            </div>
            <div className='sideBar__stats'>
              <div className='sideBar__stat'>
              <p>Who viewed you</p>
              <p className='sideBar__statNumber'>1,488</p>
              </div>
              <div className='sideBar__stat'>
              <p>Views on post</p>
              <p className='sideBar__statNumber'>2,724</p>
              </div>
            </div>
        </div>
    )
}

export default SideBar;
