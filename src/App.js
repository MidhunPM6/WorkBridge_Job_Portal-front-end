import { Routes  ,Route} from "react-router-dom";
import Home from "./Pages/Home";
import ServicePage from "./Components/Services/Services";
import Siginup from "./Pages/Siginup";
import Login from "./Pages/Loginn";
import EmployerHome from "./Pages/EmployerHome";







function App() {
  return (
    <> 


    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/service" element={<ServicePage/>} />
      <Route path="/signup" element={<Siginup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/employer" element={<EmployerHome/>} />


   



    </Routes>
    </>
  );
}

export default App;
