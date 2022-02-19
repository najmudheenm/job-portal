import "./App.css";
import { Route, Routes } from "react-router-dom";

//components
import Header from "./components/header/Header.component";

// pages
import Careers from "./pages/Carrier/Career.page";
import Home from "./pages/Home/home.page";
// import AdminPage from "./pages/admin/Admin.page";
function App() {
   
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/careers" element={<Careers />} />

        {/* <Route path="/admin" element={<AdminPage />} />  */}
      </Routes>
    </div>
  );
}

export default App;
