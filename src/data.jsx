
import img1 from './sources/Office ipsum.png'
import img2 from './sources/Potter ipsum.png'
import img3 from './sources/Pizza Ipsum.png'
import img4 from './sources/Figma ipsum.png'
import img5 from './sources/Lorem ipsum.png'
import img6 from './sources/InterviewMe.png'


let data=[
    {
        title:"Office ipsum",
        summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
        description:"wserdtcfvygbhujicj hdyusiocp hcujkl;dfkvilokfohjdklc",
        coverImage:img1,
        HackathonName:"hack it",
        hackathonStartDate:"2023-05-23",
        hackathonEndDate:"2023-05-23",
        GithubLink:"jxkaLs wds",
        OtherLinks:"gthydjkl;",
        id:"44b06e48-4041-2a81-6819-0cb5a7671c7d",
        fav:false,
        submissionDate:1679762784492,
        
        
        
    },
    {
        title:"Potter ipsum",
        summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        description:"wserdtcfvygbhujicj hdyusiocp hcujkl;dfkvilokfohjdklc",
        coverImage:img2,
        HackathonName:"hack it",
        hackathonStartDate:"2023-05-23",
        hackathonEndDate:"2023-05-23",
        GithubLink:"jxkaLs wds",
        OtherLinks:"gthydjkl;",
        id:"44b06e48-4041-2b41-6819-0cb5a7671c7d",
        fav:false,
        submissionDate:1679762082402,
        
        
        
    },
    {
        title:"Pizza Ipsum",
        summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        description:"wserdtcfvygbhujicj hdyusiocp hcujkl;dfkvilokfohjdklc",
        coverImage:img3,
        HackathonName:"hack it",
        hackathonStartDate:"2023-05-23",
        hackathonEndDate:"2023-05-23",
        GithubLink:"jxkaLs wds",
        OtherLinks:"gthydjkl;",
        id:"44b06e48-4041-2a81-6819-0ba5a7671c7d",
        fav:false,
        submissionDate:1679765782491,
        
        
        
    },
    {
        title:"Figma ipsum",
        summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        description:"wserdtcfvygbhujicj hdyusiocp hcujkl;dfkvilokfohjdklc",
        coverImage:img4,
        HackathonName:"hack it",
        hackathonStartDate:"2023-05-23",
        hackathonEndDate:"2023-05-23",
        GithubLink:"jxkaLs wds",
        OtherLinks:"gthydjkl;",
        id:"44c93e48-4041-2a81-6819-0cb5a7671c7d",
        fav:false,
        submissionDate:1679762342493,
        
        
        
    },
    {
        title:"Lorem ipsum",
        summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        description:"wseLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit nulla, sollicitudin ac tellus vitae, egestas ullamcorper tellus. Vivamus orci turpis, commodo ac rutrum posuere, tristique non lorem. Aliquam sodales, mi eleifend porta hendrerit, purus ipsum porttitor sem, nec volutpat purus nunc eget velit. Maecenas finibus accumsan posuere. Aenean sed pulvinar nisl. Etiam non justo interdum, lacinia massa et, porta purus. Aliquam sit amet facilisis mi. Sed efficitur, nibh ut efficitur lacinia, elit nulla tristique ligula, non ultrices eros lorem eget nulla. Suspendisse aliquet sagittis arcu eget vulputate. Suspendisse bibendum turpis non tortor ullamcorper, sed rutrum ex consequat. Praesent sed dictum massa. Phasellus commodo nisi eget ex rutrum, id placerat nunc hendrerit. Morbi in purus pretium, sollicitudin dolor id, efficitur est. Cras dolor eros, dapibus aliquet faucibus eu, tempus vitae ante. Phasellus sodales leo nec elit mollis rhoncusNunc fringilla rhoncus tristique. Fusce rhoncus fringilla ex in aliquam. Ut cursus varius erat. Donec ornare ex nec leo sodales, eget ullamcorper quam blandit. Aenean efficitur sagittis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam velit arcu, dapibus et lorem sit amet, lobortis laoreet tellus. Nunc non faucibus enim.",
        
        coverImage:img5,
        HackathonName:"hack it",
        hackathonStartDate:"2001-05-23",
        hackathonEndDate:"2023-06-7",
        GithubLink:"jxkaLs wds",
        OtherLinks:"gthydjkl;",
        id:"44b06e48-4039-2a81-6819-0cb5a7671c7d",
        fav:false,
        submissionDate:1679762723492,
        
        
        
    },
    {
        title:"InterviewMe",
        summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        description:"wserdtcfvygbhujicj hdyusiocp hcujkl;dfkvilokfohjdklc",
        coverImage:img6,
        HackathonName:"hack it",
        hackathonStartDate:"2002-03-23",
        hackathonEndDate:"2023-10-23",
        GithubLink:"jxkaLs wdo",
        OtherLinks:"gthydjkl;",
        id:"44b10e48-4041-2a81-6819-0cb5a7671c7d",
        fav:false,
        submissionDate:1679762702492,
        
        
        
    },


]

export const addDetail=(obj)=>{
    data=[...data,obj]

}

export const dataById=(id)=>{
    return (
        data.filter(obj=>obj.id==id)
    )
}

export const deleteById=(id)=>{
    
    data= data.filter(obj=>obj.id!=id)
    
}

export const editById=(id,val)=>{
    console.log(val)
   data = data.filter(obj=>obj.id!=id)
   data=[...data,val]
}

export const editForFav=(id)=>{
    data.forEach(obj=>{
        if(obj.id==id){
            obj.fav=obj.fav?false:true
        }

    }
    
        
    )
}

export const editStar=(id)=>{
    data.forEach(obj=>{
        if(obj.id==id){
            obj.star=obj.star?false:true
            console.log(obj.star)
        }

    }
    
        
    )
}




 export const dataProvider=()=>{

    return data;
}

export default dataProvider;


    