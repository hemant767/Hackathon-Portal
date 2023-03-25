import React from 'react'
import "./Hero.css"
import waves from '../sources/waves.png'
import bulb from'../sources/Hand holding bulb 3D.png';
// import "./SubmitButton.css"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='Hero'>
        <div className='box'>
            <h1>Hackothon Submissions</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <Link className='button' to="/submission">Upload Submission</Link>    
        </div>
        
        <div className='wave'>
        <img  src={waves}  alt="waves.png" /> 
        </div>

        <div className='bulb'>
        <img  src={bulb}  alt="Hand holding bulb"width="120" height="250"/>
        </div>
        
        
    </div>
  )
}

export default Hero