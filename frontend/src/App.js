import "./App.css";
import { Route, Routes } from "react-router-dom";

//components
import Header from "./components/Header/Header.component";

// pages
import Careers from "./pages/Carrier/Career.page";
import Home from "./pages/Home/Home.page";
import SignIn from './pages/Sign-in/SignIn.page';
import JobCreating from "./pages/Job-Create/JobCreating.pages";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/jobcreate" element={<JobCreating/>} />
      </Routes>
    </div>
  );
}

export default App;
