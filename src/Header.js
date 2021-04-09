import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import HeaderOption from './headerOption';

const Header = () => {
    return (
        <div className='header'>
        {/* Header left */}
            <div className='header__left'>
            <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1617987603~hmac=f66c5f67df703af4c35d3d85af7a18b0" alt="logo"/>
            <div className='header__search'>
             <SearchIcon/>
              <input type='text'/>
            </div>
            </div>
        {/* Header right */}
        <div className='header__right'>
        <HeaderOption title='Home' Icon={HomeIcon}/>
        <HeaderOption title='My Network' Icon={SupervisorAccountIcon}/>
        <HeaderOption title='Jobs' Icon={BusinessCenterIcon}/>
        <HeaderOption title='Message' Icon={MessageIcon}/>
        <HeaderOption title='Notification' Icon={NotificationIcon}/>
        <HeaderOption title='me' avatar='https://yt3.ggpht.com/yti/ANoDKi57tRUpsgUuVqdWkauzscKOMcRatOERoQgl_R-rrw=s88-c-k-c0x00ffffff-no-rj-mo'/>

        
        </div>
        </div>
    )
}

export default Header;
