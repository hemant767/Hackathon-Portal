import React,{useEffect,useState,useRef} from 'react';
import ReactDOM from 'react-dom';
import { useFormikContext , Formik, Field, Form } from 'formik';
import uuid from 'react-uuid';
import {addDetail,dataProvider,dataById ,editById} from '../data';
import { useSearchParams,useNavigate} from 'react-router-dom'
import * as yup from "yup"
import Header from './Header'
import './Form.css'

// const FILE_SIZE = 1024 * 1024* 1024;
//     const SUPPORTED_FORMATS = [
//       "jpg",
//       "jpeg",
//       "gif",
//       "png"
//     ];

const validationSchema = yup.object().shape({
  title: yup.string().required("Required").min(2, "Too Short!!").max(20, "Too Long!!"),
  summary: yup.string().required("Required").min(20, "Too Short!!").max(120, "Too Long!!"),
  description: yup.string().required("Required").min(30, "Too Short!!").max(3000, "Too Long!!"),
  
  
  HackathonName: '',
  hackathonStartDate: yup.date(),
  hackathonEndDate: yup.date().min(yup.ref("hackathonStartDate"),"End date cannot be before start date"),
  GithubLink: yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!'
    )
    .required('Please enter website'),
  OtherLinks: '',
  submissionDate: '',

})

const AutoSubmitToken = () => {
  // Grab values and submitForm from context
  const { values, submitForm } = useFormikContext();
  React.useEffect(() => {
    // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
    // if (values.token.length === 6) {
    //   submitForm();
    
  }, [values, submitForm]);
  return values.description.split("").length;
};
const Basic = () => {
  
  const[imgStatus,setStatus]=useState(false)
  const[data,setData]=useState()
  const[p,setP]=useSearchParams()
  const edit=p.get("edit")
  const pid=p.get("id")
  const navigate=useNavigate()
  
  

  

  

  
  

  useEffect(()=>{
    if(edit){
      let xData=dataById(pid)
      setData(xData[0])
      console.log(xData[0])
    }
  },[])
  console.log(edit ,pid)
  console.log(dataProvider())

  const current=new Date()
  const time = current.getTime()
    
   
 

  console.log(time);

  
 
  const initialValues={
            title: 'Project 1',
            summary: 'Heifhdk edbhufhiweu freufhyukislfu',
            description:'fcyhjgdbeifu 3wyjh3fruke4hyvufkc u3444wfjuyhbyuyb4uygfutyh 3ruwyf',
            coverImage: null,
            HackathonName: 'Vsytadguihwe',
            hackathonStartDate: '2022-11-08',
            hackathonEndDate: '2022-11-10',
            GithubLink: 'www.abc.com',
            OtherLinks: '',
           
  }

  const statusToggler=()=>{
    data.coverImage=null;
    initialValues.coverImage=null;
    setStatus(!imgStatus)

  }


  // const fileName=(name)=>{
  //     const a = name.split("/")[3]
  //     return a.split(".")[0] +"."+ a.split(".")[2]
  // }
  

  
  return (
    <div>
      <Header />
      <div className='formContainer'>

        {!edit||data?<Formik

            
          initialValues={
           
            data || initialValues 
          }
          enableReinitialize
          validationSchema={validationSchema}

          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));

            
            values.submissionDate=time
            console.log(values);

            if (edit) {
              editById(pid, values)
            } else {
              values.id = uuid();
              addDetail(values);
            }
            console.log(dataProvider())
            navigate("/")
            
              
            

          }}
        >
          { ({errors,touched})=>( <Form className='Form'>
            
            <h3>New Hackathon Submissions</h3>
           
            <div className='con'>
              <label htmlFor="title">Title</label>
              <Field className='Single' id="title" name="title" placeholder="Title of your submission" />
              {errors.title && touched.title?(<div className='error' >{errors.title}</div>):null}

            </div>
             <div className='con'>
              <label htmlFor="summary">Summary</label>
              <Field className='Single' id="summary" name="summary" placeholder="A short summary of your submission (this will be visible with your submission)" />
              {errors.summary && touched.summary?(<div className='error' >{errors.summary}</div>):null}
            </div>

            <div className='con'>
              <label htmlFor="description">Description</label>
              <Field className='double' id="description"  name="description" placeholder="Write a long description of you project.You can describe your idea and approach here." as="textarea" />
              <p className='text'>{<AutoSubmitToken/>}/3000 words</p>
              {errors.description && touched.description?(<div className='error' >{errors.description}</div>):null}
            </div>
            
            <div className='con'>
              <label htmlFor="coverImage" >Cover Image</label>
              <p>Minimum resolution:360px x 360px</p>
              {!imgStatus && edit ?(<div className='imgPreview'>
              <div className='Preview'>
                <img src={data.coverImage} style={{"object-fit":"cover","border-radius":"2px"}} width="50" height="50"/>
                {/* <span>{fileName(data.coverImage)}</span> */}
              </div>
              <div className='upload'>
                <button>Reupload<i style={{"margin-left":"5px"}} class="fa fa-cloud-upload" aria-hidden="true"></i></button>
              </div>
              
            </div>):(
              <div className='drop'>
                <Field id="coverImage" name="coverImage"  type="file" />
                {errors.coverImage && touched.coverImage?(<div className='error' >{errors.coverImage}</div>):null}
              </div>)}




              
            </div>
            <div className='con'>
              <label htmlFor="HackathonName">Hackathon Name</label>
              <Field className='Single' id="HackathonName" name="HackathonName" placeholder="Enter the name of the hackathon" />
            </div>
            <div className='dateBox con'>
              <div className='dateBlock'>
                <label htmlFor="hackathonStartDate">Hackathon Start Date</label>
                <Field className='dateIn'  id="hackathonStartDate" name="hackathonStartDate" placeholder="Select start date" type="date" />
              </div>



              <div className='dateBlock'>
                <label htmlFor="hackathonEndDate">Hackathon End Date</label>
                <Field className='dateIn' id="hackathonEndDate" name="hackathonEndDate" placeholder="Select end date" type="date"  />
                {errors.hackathonEndDate && touched.hackathonEndDate?(<div className='error' >{errors.hackathonEndDate}</div>):null}
              </div>


            </div>
            <div className='con'>
              <label htmlFor="GithubLink">Github Repository</label>
              <Field className='Single' id="GithubLink" name="GithubLink" placeholder="Enter your submission's public reository link" />
            </div>
            <div className='con'>
              <label htmlFor="OtherLinks">Other Links</label>
              <Field className='Single marginB' id="OtherLinks" name="OtherLinks" placeholder="You can upload demo or URL of your demo app here" />
            </div> 
            <hr ></hr>

            <button type="submit" className='button'>{edit?"Save Submission":"Upload Submission"}</button>

            

          </Form>)}
        </Formik>:null}
      </div>
    </div>
  )

}

export default Basic;