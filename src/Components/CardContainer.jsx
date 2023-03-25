import React from 'react'
import Card from './Card'
import './CardContainer.css'


const CardContainer = ({data}) => {
  return (

    <div className='Container'>
    
    {data.map(obj => (
        

        <Card
            title={obj.title}
            summary={obj.summary}
            coverImage={obj.coverImage}
            id={obj.id}
            date={obj.date}

          />

    ))}
    </div>
  )
}

export default CardContainer