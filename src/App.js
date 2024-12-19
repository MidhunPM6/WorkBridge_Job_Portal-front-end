import { Routes, Route } from 'react-router-dom'
import Home from './Pages/UserPages/Home'
import ServicePage from './Components/Services/Services'
import Siginup from './Pages/UserPages/Siginup'
import Login from './Pages/UserPages/Loginn'
import EmployerHome from './Pages/EmployerPages/EmployerHome'
import EmployerLogin from './Pages/EmployerPages/EmployerLogin'
import EmployerSignup from './Pages/EmployerPages/EmployerSignup'
import SeekerUsernameContext from './Context/SeekerContext'
import UserProfile from './Pages/UserPages/UserProfile'
import Jobview from './Pages/UserPages/Jobview'
import Applyjob from './Pages/UserPages/Applyjob'
import EmployerUsername from './Context/EmployerUsername'
import ProfileMainpage from './Pages/EmployerPages/ProfileMainpage'
import Postjob from './Pages/EmployerPages/Postjob'
import JobpostContext from './Context/JobpostContext'
import UserDetailsContext from './Context/UserDetailsContext'
import SeletedJobContext from './Context/SeletedJobContext'



function App () {
  return (
    <>
     <JobpostContext>
      <EmployerUsername>
      <SeekerUsernameContext>
      <UserDetailsContext>
        <SeletedJobContext>        
        <Routes>
          {/*User routes */}
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<ServicePage />} />
          <Route path='/signup' element={<Siginup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/jobview' element={<Jobview />} />
          <Route path='/applyjob' element={<Applyjob />} />

          {/*Empolyer routes*/}
          <Route path='/employer' element={<EmployerHome />} />
          <Route path='/employerlogin' element={<EmployerLogin />} />
          <Route path='/employersignup' element={<EmployerSignup />} />
          <Route path='/employerprofile' element={<ProfileMainpage />} />
          <Route path='/postjob' element={<Postjob />} />



        </Routes>
        </SeletedJobContext>
        </UserDetailsContext>
      </SeekerUsernameContext>
      </EmployerUsername>
      </JobpostContext>
    </>
  )
}

export default App
