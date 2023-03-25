import React, { useEffect, useState } from 'react'
import './SubDetailHero.css'
import Pirate from '../sources/Pirate ipsum.jpg'
import {useSearchParams,Link,useNavigate} from 'react-router-dom'
import { editStar,dataById ,editForFav,deleteById} from '../data'
import UseAnimations from "react-useanimations";
import star from 'react-useanimations/lib/star';
import swal from 'sweetalert';



const SubDetailHero = ({coverImage,title,summary,id,fav,submissionDate}) => {

    
 const navigate=useNavigate()
 const handleStar=()=>{

    editForFav(id)
    editStar(id)
    
    
 }


 const handleDelete=()=>{
    swal({
        
        text: "Are you sure that you want to delete?",
        icon: "warning",
        dangerMode: true,
        buttons: [
            'No',
            'Yes'
          ],
      })
      .then(willDelete => {
        if (willDelete) {
          
          deleteById(id)
          navigate("/")
        }
      });

 }

    return (
        <div className='detailHero'>
            <div className='heroMain'>
                <div className='picTitle'>

                    <img src={coverImage} alt="Pirate Ipsum.png" />

                    <div>
                        <h1>{title}</h1>
                    </div>

                </div>
                <p>{summary}</p>
                <div className='heroBottom'>
                    
                    <UseAnimations  fillColor='white' reverse={fav}  strokeColor ='white' onClick={()=>handleStar()} animation={star} size={25} />
                    <h2>|</h2>
                    <div className='cal'>
                        <i class="fa fa-calendar-o" aria-hidden="true"></i>
                        <p>{submissionDate}</p>
                    </div>



                </div>

            </div>

            <div className='Change'>
                <Link className='Change' to={`/submission?edit=true&id=${id}`}>
                <button ><i class="fa fa-pencil" aria-hidden="true"></i>Edit</button>
                </Link>
                
                <button  onClick={()=>handleDelete()}><i class="fa fa-trash-o fa-lg"></i>Delete</button>
               
            </div>
        </div>
    )
}

export default SubDetailHero