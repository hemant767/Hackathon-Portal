import React from 'react'
import './DetailContainer.css'
import DateObject from 'react-date-object';

const DetailContainer = ({description,name,startDate,endDate,GithubLink,Other}) => {
    
    const date = new DateObject({
        year: startDate.split("-")[0],
        month: startDate.split("-")[1],
        day: startDate.split("-")[2],
        
      });
      
      const sDate = date.format("DD MMMM YYYY");

      const date1 = new DateObject({
        year: endDate.split("-")[0],
        month: endDate.split("-")[1],
        day: endDate.split("-")[2],
        
      });
      const eDate = date1.format("DD MMMM YYYY");


    return (
    <div className='DetailContainer'>
        <div className='Description'>
            <h4>Description</h4>
            
                <p>
                      {description}
                  </p>
            
        </div>
        <div className='SubDetail'>
            <div className='thonDetail'>
                <h3>Hackathon</h3>
                <h2>{name}</h2>
                <div className='date'>
                    <i class="fa fa-calendar-o" aria-hidden="true"></i>
                    <h5>{sDate}-{eDate}</h5> 
                </div>
            </div>
            
            <div className='links'>
                <a href={GithubLink}><i class="fa fa-github" aria-hidden="true"></i>Github Repository</a>
                <a href={Other}><i class="fa fa-external-link" aria-hidden="true"></i>Other Link</a>
            </div>
        </div>
    </div>
  )
}

export default DetailContainer