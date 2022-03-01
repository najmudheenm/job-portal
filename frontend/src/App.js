import "./App.css";
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import {useEffect} from 'react'
import { Route, Routes } from "react-router-dom";

import {useDispatch} from 'react-redux'

//import action
import {fetchJobData} from './redux/jobs/jobsAction'

//components
import Header from "./components/Header/Header.component";

// pages
import Careers from "./pages/Carrier/Career.page";
import Home from "./pages/Home/home.page";
import SignIn from './pages/Sign-in/SignIn.page';
import JobCreating from "./pages/Job-Create/JobCreating.pages";
import JobDetails from "./pages/JobDetails/JobDetails.page";

//testing job creation
import TestCreateJob from "./pages/Job-Create-2/JobCreate.page"

function App() {
  const dispatch =useDispatch()

  // useEffect(() => {
  //   dispatch(fetchJobData)
  // }, [])
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/:id" element={<JobDetails/>}/>
        <Route path="career" element={<TestCreateJob/>} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/jobcreate" element={<JobCreating/>} />
      </Routes>
    </div>
  );
}

export default App;
