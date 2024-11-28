import { Routes  ,Route} from "react-router-dom";
import Home from "./Pages/Home";
import ServicePage from "./Components/Services/Services";
import Siginup from "./Pages/Siginup";
import Login from "./Pages/Loginn";
import EmployerHome from "./Pages/EmployerHome";
import EmployerLogin from "./Pages/EmployerLogin";
import EmployerSignup from "./Pages/EmployerSignup";
import SeekerUsernameContext from "./Context/SeekerUsernameContext";








function App() {
  return (
    <> 

    <SeekerUsernameContext>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/service" element={<ServicePage/>} />
      <Route path="/signup" element={<Siginup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/employer" element={<EmployerHome/>} />
      <Route path="/employerlogin" element={<EmployerLogin/>} />
      <Route path="/employersignup" element={<EmployerSignup/>} />

    </Routes>
    </SeekerUsernameContext>
    </>
  );
}

export default App;
