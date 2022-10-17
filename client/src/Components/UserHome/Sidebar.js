import { Avatar } from '@material-ui/core'
import React from 'react'

 
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__profile'>
            <img src="https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg" />
                <div className='profile__details' >
                    <Avatar />
                    <h4>Pranav</h4>
                    <p>Web developer</p>
                </div>
                <div className='profile__stats'>
                    <span>Who's viewed your profile</span>
                    <span className='stat__number'>60</span>

                </div>
                <div className='profile__stats'>
                    <span>Impressions of your post</span>
                    <span className='stat__number'>130</span> 

                </div>
            
            
        </div>
        <div className='sidebar__recent'>
            <p>Recent</p>
            <p className='hash'><span>#</span>branding</p>
            <p className='hash'><span>#</span>marketing</p>
            <p className='hash'><span>#</span>webdevelopment</p>
            <p className='hash'><span>#</span>programming</p>
            <p className='hash'><span>#</span>reduxtoolkit</p>
            <p className='hash'><span>#</span>reactjs</p>


        </div>
    </div>
  )
}

export default Sidebar