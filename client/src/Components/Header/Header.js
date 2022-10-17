import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import MessageIcon from '@material-ui/icons/Message'
import NotificationIcon from '@material-ui/icons/Notifications'
import { Avatar, Button } from '@material-ui/core'


import HeaderOptions from './HeaderOptions'
import { useNavigate } from 'react-router-dom';



function Header() {
  const navigate = useNavigate()
  const handleLogout =() =>{
    alert('logout')
    localStorage.removeItem("user")
    navigate('/')
  }
  return (
    <div className='header'>
        <div className='header__left'>
            <div className='header__logo'>
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
            </div>
            <div className='header__search'>
               <SearchIcon />
               <input type="text" placeholder='Search' /> 
            </div>
        </div>
        <div className='header__right'>
              <HeaderOptions Icon ={HomeIcon} title="Home"/>
              <HeaderOptions Icon ={PeopleIcon} title="My Network"/>
              <HeaderOptions Icon ={BusinessCenterIcon} title="Jobs"/>
              <HeaderOptions Icon ={MessageIcon} title="Messaging"/>
              <HeaderOptions Icon ={NotificationIcon} title="Notifications"/>
              <HeaderOptions avatar ={Avatar} title="me"/>


        </div>
        <Button onClick={handleLogout} variant='contained'>Logout</Button>

    </div>
  )
}

export default Header