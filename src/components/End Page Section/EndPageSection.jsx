import React from 'react'
import '../../styles/EndPageSectionStyles.css' 
import logo from '../../assets/averi-logo-nobg1.png'
const EndPageSection = () => {
  return (
    <>
    <div className='endpage-container'>
      <p className='endpage-1'> &gt;since you're here, check out my work!</p>
      <button className='endpage-button'>my work</button>
      <p className='endpage-1'> &gt;you can also check out my blogs!</p>
      <button className='endpage-button-2'>my blogs</button>
    </div>
    <div className='logo-endpage-container'>
      <img src={logo} alt="Logo" className="logo-endpage" /> </div>
    </>
  )
}

export default EndPageSection