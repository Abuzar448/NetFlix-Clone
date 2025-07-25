import React from 'react'
import './Footer.css';
import youtube_icon from '../../assets/assets/youtube_icon.png';
import twitter_icon from '../../assets/assets/twitter_icon.png';
import instagram_icon from '../../assets/assets/instagram_icon.png';
import facebook_icon from '../../assets/assets/facebook_icon.png';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-Icons">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Audia Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Jobs</li>
        <li>Terms And Privacy</li>
        <li>privacy</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact us</li>
        
      </ul>
      <p className='copyright-text'>@ 1997-2025 Netflix,Inc.</p>
    </div>
  )
}

export default Footer