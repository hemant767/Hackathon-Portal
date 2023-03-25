import React from 'react'
import {useNavigate} from 'react-router-dom'
import TimeAgo from 'react-timeago'
import { dataById ,dataProvider} from '../data'
import './Card.css'
const Card = ({title, summary , coverImage , id,date}) => {
  

  const navigate=useNavigate()
  
  

  
  return (
    
    <div onClick = {()=>navigate(`/subDetail?id=${id}`)}  className='Card' >
        <div className='Identity'>
            <img  src={coverImage}  alt="Hand holding bulb" width="100" height="100"/> 
            <h3>{title}</h3>
        </div>

        <div className='Summary'>
            <p> {summary}</p>
        </div>

        <div className='dAte' style={{"color":"#88888"}}>
          <TimeAgo 
          date={date}
          />
        </div>
    </div>
    
  )
}

export default Card