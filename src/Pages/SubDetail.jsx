import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import Header from '../Components/Header';
import { dataById } from '../data';
import SubDetailHero from '../Components/SubDetailHero'
import DetailContainer from '../Components/DetailContainer';

const SubDetail = () => {


  const [data, setData] = useState()
  const [p, getP] = useSearchParams()
  const id = p.get("id")
  useEffect(() => {
    const temp = dataById(id)
    setData(temp[0]);

  }, [])
  return (
    <div className='container'>
      <Header />
      {data ?
        <>
          <SubDetailHero
            coverImage={data.coverImage}
            title={data.title}
            summary={data.summary}
            id={id}
            fav={data.fav}
            submissionDate={data.submissionDate}



          />
          <DetailContainer
            description={data.description}
            name={data.HackathonName}
            startDate={data.hackathonStartDate}
            endDate={data.hackathonEndDate}
            GithubLink={data.GithubLink}
            Other={data.OtherLinks}


          />
        </> : null}


    </div>
  )
}

export default SubDetail