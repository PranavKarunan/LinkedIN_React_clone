import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import PhotoIcon from '@material-ui/icons/Photo'
import YoutubeIcon from '@material-ui/icons/YouTube'
import TodayIcon from '@material-ui/icons/Today'
import AssignmentIcon from '@material-ui/icons/Assignment'
import Post from './Post'
import axios from 'axios'


function Feed() {
    const [posts,setPost] = useState([])
    const user = JSON.parse(localStorage.getItem("user"))
    const [message,setMessage] =useState('')
    const submitPost = (e) =>{
        e.preventDefault();
        
        const {data} = axios.post('http://localhost:8800/createPost',{message,user})
        setPost([...posts,message])
        setMessage('')
    }
    
    useEffect(()=>{
        async function fetchData() {
            axios.get('http://localhost:8800/posts').then((res)=>{
                setPost(res.data)
                
            })
            
            
          }
          fetchData();
        
        
      
    },[posts])
  return (
    <div className='feed'>
        <div className='feed__input'>
            
            <div className='feed__form'>
                
             <Avatar />
                <form onSubmit={submitPost}>
                    <input type="text" placeholder='Start a post' name="message" value={message} onChange={e=>setMessage(e.target.value)}/>
                    <input type="submit" />
                </form>
            </div>

            <div className='feed__options'>
                <div className='option'>
                    <PhotoIcon style ={{color:'#70b5f9'}}/>
                    <span>Photo</span>
                </div>
                <div className='option'>
                    <YoutubeIcon style ={{color:'#7fc15e'}}/>
                    <span>Video</span>
                </div>
                <div className='option'>
                    <TodayIcon style ={{color:'#e7a33e'}}/>
                    <span>Event</span>
                </div>
                <div className='option'>
                    <AssignmentIcon style ={{color:'#fc9295'}}/>
                    <span>Write Article</span>
                </div> 

            
            </div>
        </div>
        <>
       {    
        posts.map((post => <Post key={post._id} post={post} />   ))
          
       
        }
        </>
    </div>
  )
}

export default Feed