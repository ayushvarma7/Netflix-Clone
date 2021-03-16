import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import './Navbar.css'

const Navbar = () => {
    const [show, handleShow]= useState(false);
    const history= useHistory(); // hook, it saves the history

    const transitionNavBar=()=>{
        if(window.scrollY> 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    };

    useEffect(() => {
        // as we scroll it will trigger transNav func
        window.addEventListener("scroll", transitionNavBar);
        return () => {
            window.removeEventListener("scroll", transitionNavBar);
        }
    }, []);
    
    return (
        <div className={`nav ${show && `nav__black`}`}>
        <div className="nav__contents">
        <img onClick={()=> history.push("/")} //pops to '/' route 
        className='nav__logo'
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
        <img onClick={()=> history.push('/profile')} //pushes to profile route
        className='nav__avatar'
         src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
            {/* <h1>This is the Navbar</h1> */}
        </div>
        
        </div>
    )
}

export default Navbar
