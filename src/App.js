import { Routes  ,Route} from "react-router-dom";
import Home from "./Pages/UserPages/Home";
import ServicePage from "./Components/Services/Services";
import Siginup from "./Pages/UserPages/Siginup";
import Login from "./Pages/UserPages/Loginn";
import EmployerHome from "./Pages/EmployerPages/EmployerHome";
import EmployerLogin from "./Pages/EmployerPages/EmployerLogin";
import EmployerSignup from "./Pages/EmployerPages/EmployerSignup";
import SeekerUsernameContext from "./Context/SeekerUsernameContext";
import UserProfile from "./Pages/UserPages/UserProfile";
import Jobview from "./Pages/UserPages/Jobview";
import Applyjob from "./Pages/UserPages/Applyjob";





function App() {
  return (
    <> 

    <SeekerUsernameContext>
    <Routes>

      {/*User routes */}
      <Route path="/" element={<Home/>} />
      <Route path="/service" element={<ServicePage/>} />
      <Route path="/signup" element={<Siginup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<UserProfile/>} />
      <Route path="/jobview" element={<Jobview/>} />
      <Route path="/applyjob" element={<Applyjob/>} /> 


      {/*Empolyer routes*/ }
      <Route path="/employer" element={<EmployerHome/>} />
      <Route path="/employerlogin" element={<EmployerLogin/>} />
      <Route path="/employersignup" element={<EmployerSignup/>} />


    </Routes>
    </SeekerUsernameContext>
    </>
  );
}

export default App;
