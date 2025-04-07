import React from 'react'

import '../../styles/GreetingsSectionStyles.css' 

import cayabyabPhoto from '../../assets/cayabyab-photo.png' 
const GreetingsSection = () => {
  return (
<>
<div className='greetings-container'>
    <p className='greetings-1'> &gt; hi! maverick's the name!</p>
    <p className='greetings-2'> &gt; back-end web developer</p>
    <p className='greetings-3'> &gt; i make apis and backend solutions!</p>
</div>

<div className='greetings-container-2'>
    <p className='greetings-description-1'>
      <p>
      // i am currently an intern backend developer at iCXeed Inc., a Customer service BPO company in the Philippines.
      </p>

      <p>
      //i mainly focus on web-based backend development, focused on the creation of apis (ExpressJS, Springboot RESTFUL APIs), but have knowledge in the development of android applications (Kotlin+Java), software-based services(Java), and database management (MySQL and MariaDB).
      </p>

      <p>

      //i also am learning cloud computing, mainly focusing on amazon web services, since my company, iCXeed is in the marketplace of AWS Cloud services.   
      </p>
      
      </p>  
   
</div>
<div className='cayayab-photo-container'>
      <img className='cayayab-photo' src={cayabyabPhoto} alt="Cayabyab's Photo" />
    </div>  
</>
  )
}

export default GreetingsSection