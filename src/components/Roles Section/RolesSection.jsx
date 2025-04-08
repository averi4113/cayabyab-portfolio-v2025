import React from 'react'
import '../../styles/RolesSectionStyles.css' 
import logo from '../../assets/averi-logo-nobg1.png'
import icxeedLogo from '../../assets/icxeed-logo.png'
import mapuaLogo from '../../assets/mapua-university-seeklogo.png'
const RolesSection = () => {
  return (
    <>
    <>
    <div class = "roles-container"  >
      <h1 class = "roles-header" > &gt; what i've been doing the past years </h1>
    </div>

    <div class = "roles-description-container" > 
      <p className='roles-description'> 
      //loves creating logical functions and apis. in projects and website development, you can find me looking at data and values in SQL databases and implementing it on an api to be shown in the frontend of sides. you can call my work a backstage director in a stage play, making the frontend shine and functional 
      </p>
    </div>

      <div class = "roles-description-container" > 
      <p className='roles-description'> 
      //a graduate from mapua university, and currently an intern in a BPO company named iCXeed Inc., a customer experience service in the Philippines. i help them create services and web-based tools and deploying those tools in the cloud, specifically aws cloud service provider.
      </p>
    </div>

    <div className='averi-logo'>
      <img src= {logo} alt="Averi Logo" className='averi-logo-image' />
    </div>

    <div className='icxeed-photo-container'>
        <img className='icxeed-photo' src= {icxeedLogo} alt="icxeed-logo" />
      </div>

    <div className='mapua-logo'>  
      <img src= {mapuaLogo} alt="Mapua Logo" className='mapua-logo-image' />
    </div>
    </>
      </>
  )
}

export default RolesSection