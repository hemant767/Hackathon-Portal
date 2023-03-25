import React, { useState, useEffect } from 'react'
import './HomePage.css'
import Header from "../Components/Header"
import Hero from "../Components/Hero"
import Submissions from '../Components/Submissions'
import Card from '../Components/Card'
import dataProvider from '../data'
import CardContainer from '../Components/CardContainer'




const HomePage = () => {

  const [favStatus, setFavStatus] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortStatus, setSortStatus] = useState(true)
  const [orgData, setOrgData] = useState([])
  const [data, setData] = useState([])

  

  
  useEffect(() => {
    (async()=>{
      const obj=await dataProvider()
      // setData(obj)
      setOrgData(obj);

      let temp
    if(sortStatus){
      temp=obj.sort((obj1,obj2)=>new Date(obj2.date)-new Date(obj1.date))
    }else{
      temp=obj.sort((obj1,obj2)=>new Date(obj1.date)-new Date(obj2.date))
    }
      setData(temp)
    })()


    }, [])



    

  

  useEffect(()=>{

    let temp
    if(sortStatus){
      console.log("if")
      temp=data.sort((obj1,obj2)=>new Date(obj2.date)-new Date(obj1.date))
    }else{
      console.log("else")
      temp=data.sort((obj1,obj2)=>new Date(obj1.date)-new Date(obj2.date))
    }
    console.log("Dtata after sorting", sortStatus)
    console.log(temp);



    temp=orgData.filter(obj=>obj.title.toLowerCase().startsWith(searchTerm.toLowerCase()))

        if(favStatus){
          temp = temp.filter(obj => obj.fav == true)
        }setData(temp)


  },[searchTerm,favStatus,sortStatus])



  

  useEffect(()=>{
 
    
  },[sortStatus])

  




  return (
    <div className='container'>
      <Header />
      <Hero />
      <Submissions

        setFavStatus={setFavStatus}
        favStatus={favStatus}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        sortStatus={sortStatus}
        setSortStatus={setSortStatus}


      />
      
        {data ? 
         <CardContainer
         data={data}
         
         />: null}
      



    </div>
  )
}

export default HomePage