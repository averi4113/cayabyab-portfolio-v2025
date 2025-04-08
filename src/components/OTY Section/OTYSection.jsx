import React from 'react'
import '../../styles/OTYSectionStyles.css' 
import { SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMariadb } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";

const OTYSection = () => {
  return (
    <>
    <div class = "oty-container"  >
      <h1 class = "oty-header" > &gt; backend development and API development </h1>
    </div>

    <div class = "oty-description-container" > 
      <p className='oty-description'> 
        //loves creating logical functions and apis. in projects and website development, you can find me looking at data and values in SQL databases and implementing it on an api to be shown in the frontend of sides. you can call my work a backstage director in a stage play, making the frontend shine and functional.
      </p>
    </div>
    <div className='languages-container'>
    <SiExpress className="language-icon icon-small-1" />
    <FaJava className="language-icon icon-medium-1" />
    <SiSpringboot className="language-icon icon-large-1" />
    <FaHtml5 className="language-icon icon-small-2" />
    <FaPython className="language-icon icon-medium-2" />
    <SiMysql className="language-icon icon-large-2" />
    <SiMariadb className="language-icon icon-small-3" />
    <FaJsSquare className="language-icon icon-large-3" /> 
    </div>

    <div class = "oty-container-2"  >
      <h1 class = "oty-header-2" > &gt; aspiring cloud developer </h1>
      </div>

      <div class = "oty-description-container-2" > 
      <p className='oty-description-2'> 
      //in my internship and cloud computing course, i have always been interested in the world of cloud, specifically in the aws world. creating solutions and using numerous services in the cloud got me interested as it is also known in the IT world as the “jack-of-all-trades”.
      </p>
    </div>
    <div className='aws-container'>
      <FaAws />
      </div>
    </>
  )
}

export default OTYSection