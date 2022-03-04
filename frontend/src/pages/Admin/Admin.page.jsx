import {useEffect,useState} from'react'
import { Link, useParams,useLocation,useNavigate } from "react-router-dom";
import axios from 'axios'
import {useSelector} from 'react-redux'

function JobCreate() {
  const parms = useParams();
  const {state}=useLocation()
  const [data, setData] = useState('')
  const [status, setStatus] = useState('pending')
  const [fetch, setFetch] = useState(true)
  const [applications, setApplications] = useState('')
  const navigate=useNavigate()
  const user =useSelector(user=>user.admin)
  useEffect(() => {
      if(!user.email.length){
        navigate("/login")
      }
    },[user])

  useEffect(async() => {
    console.log(data);
    if(!data.length &&fetch){
      const res=await axios.get(`${process.env.REACT_APP_BASE_URL}admin/appliedjob?jobId=${parms.id}`,{ withCredentials: true })
      setFetch(false)
      setApplications(res.data.data)
      const filterData=res.data.data.filter(candidate=>candidate.applyStatus==status)
      setData(filterData)
    }
  },[setData,data])
  
  const statusChangeHandler=(e)=>{
    console.log(e.target.value);
    setStatus(e.target.value)
    const filterData=applications.filter(candidate=>candidate.applyStatus==e.target.value)
     setData(filterData)

  }

  //job approveHandler
  const approveHandler=async(e,action)=>{
    console.log(e);
    try{
      await axios.patch(`${process.env.REACT_APP_BASE_URL}admin/updateapplyStatus`,{email:e.email,jobId:e.jobId,applyStatus:action},{withCredentials: true})
      const filterdData=data.filter(temp=>temp._id!==e._id)
      setData(filterdData)
    }catch (err) {
      console.log(err);
    }
  }

 
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-7 mx-auto">
          <div className="card rounded-0 border-0 shadow">
            <div className="card-body p-5">
              <div className="table-responsive">
                <h1></h1>
                <table className="table">
                  <select value={status} onChange={statusChangeHandler}>
                    <option value='pending'>pending</option>
                    <option value='approved'>approved</option>
                    <option value='rejected'>rejected</option>
                  </select>
                  
                  <thead>
                    <tr>
                      <th scope="col">Email</th>
                      <th scope="col">Resume</th>
                      {status =='pending'&&( <th scope="col">Action</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {data.length && data.map((candidate)=>(
                
                      <tr key={candidate._id}>
                      <th scope="row">{candidate.email}</th>
               
                      <td>
                        <a
                          href={`${process.env.REACT_APP_BASE_URL}${candidate.fileName}`}
                          target="_blank"
                          download
                        >
                          Click to download
                        </a>                       
                      </td>
                    {status=="pending" &&(  <td className="d-flex justify-content-around align-items-center ">
                        <button onClick={()=>approveHandler(candidate,'approved')} className="btn btn-success" >
                          
                          Approve
                        </button>
                        <button onClick={()=>approveHandler(candidate,'rejected')} className="btn btn-danger" >
                          Reject
                        </button>
                      </td> )}
                      <td></td>
                    </tr>

                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCreate;
