import { Routes  ,Route} from "react-router-dom";
import Home from "./Pages/Home";
import ServicePage from "./Components/Services/Services";
import Siginup from "./Pages/Siginup";
import Login from "./Pages/Loginn";
import EmployerHome from "./Pages/EmployerPages/EmployerHome";
import EmployerLogin from "./Pages/EmployerPages/EmployerLogin";
import EmployerSignup from "./Pages/EmployerPages/EmployerSignup";
import SeekerUsernameContext from "./Context/SeekerUsernameContext";
import UserProfile from "./Pages/UserProfile";
import Jobview from "./Pages/Jobview";



function App() {
  return (
    <> 

    <SeekerUsernameContext>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/service" element={<ServicePage/>} />
      <Route path="/signup" element={<Siginup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<UserProfile/>} />
      <Route path="/jobview" element={<Jobview/>} />

      


      <Route path="/employer" element={<EmployerHome/>} />
      <Route path="/employerlogin" element={<EmployerLogin/>} />
      <Route path="/employersignup" element={<EmployerSignup/>} />


    </Routes>
    </SeekerUsernameContext>
    </>
  );
}

export default App;
