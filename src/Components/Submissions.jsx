import React from 'react'
import './Submissions.css'


const Submissions = ({favStatus,setFavStatus,searchTerm,setSearchTerm ,setSortStatus,sortStatus}) => {


  return (
    <div className='subContainer'>
      <div className='sub'>
        <h3 style={{borderBottom:favStatus?"none":"2px solid #44924C"}} onClick={()=>setFavStatus(false)}> All Submissions</h3>
        <h3 style={{borderBottom:favStatus?"2px solid #44924C":"none"}} onClick={()=>setFavStatus(true)}>Favourite Submissions</h3>
      </div>
      <div className='filter'>
        <div className='search'>
          <i class="fa fa-search" aria-hidden="true"></i>
          <input onChange={(event)=>setSearchTerm(event.target.value)} value={searchTerm} type='search' placeholder='Search' />
        </div>

        <div className='roll'>
          <p className='formRight'>


            <select onChange={(event)=>setSortStatus(event.target.value)}id="leadType" class="box2" name="lead_type">
              <option value="true">Newest</option>
              <option value="false">Oldest</option>

            </select>
          </p>

        </div>



      </div>


    </div>

  )
}

export default Submissions