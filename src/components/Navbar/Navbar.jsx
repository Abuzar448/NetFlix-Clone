import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/assets/logo.png';
import search from '../../assets/assets/search_icon.svg';
import Bell from '../../assets/assets/bell_icon.svg';
import Navbar_Profile from '../../assets/assets/profile_img.png'
import Caret_Icon from '../../assets/assets/caret_icon.svg';
import { logOut } from '../../firebase';

const Navbar = () => {
  const navref = useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navref.current.classList.add('navdark')
      }
      else{
         navref.current.classList.remove('navdark');
      }
    });
  },[])

  return (
    <div className='navbar' ref={navref}>
      <div className="navbar-left">
        <img src={logo} alt="logo-Icon" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="Search-Icon" className='icons'/>
        <p>Children</p>
        <img src={Bell} alt="Bell_Icon" className='icons'/>
        <div className='navbar_profile'>
          <img src={Navbar_Profile} alt="Profile_Icon" className='profile'/>
          <img src={Caret_Icon} alt="Caret-Icon" />
          <div className='drop-down'>
            <p onClick={()=>{
              logOut()
            }}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar