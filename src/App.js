import { Routes, Route } from 'react-router-dom'
import Home from './Pages/UserPages/Home'
import ServicePage from './Components/Jobseeker-Components/Services/Services'
import Siginup from './Pages/UserPages/Siginup'
import Login from './Pages/UserPages/Loginn'
import EmployerHome from './Pages/EmployerPages/EmployerHome'
import EmployerLogin from './Pages/EmployerPages/EmployerLogin'
import EmployerSignup from './Pages/EmployerPages/EmployerSignup'
import UserProfile from './Pages/UserPages/UserProfile'
import Jobview from './Pages/UserPages/Jobview'
import Applyjob from './Pages/UserPages/Applyjob'
import EmployerUserDetails from './Context/EmployerUserDetails'
import ProfileMainpage from './Pages/EmployerPages/ProfileMainpage'
import Postjob from './Pages/EmployerPages/Postjob'
import JobpostContext from './Context/JobpostContext'
import RecivedApplication from './Pages/EmployerPages/RecivedApplication'
import AccountSettings from './Pages/EmployerPages/AccountSettings'



function App () {
  return (
    <>
      <JobpostContext>
        <EmployerUserDetails>
        
            
                
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
                  <Route
                    path='/employerprofile'
                    element={<ProfileMainpage />}
                  />
                  <Route path='/postjob' element={<Postjob />} />
                  <Route
                    path='/recApplication'
                    element={<RecivedApplication />}
                  />
                  <Route
                    path='/profile/accountsetting'
                    element={<AccountSettings/>}
                  />
                
                </Routes>
             
          
        </EmployerUserDetails>
      </JobpostContext>
    </>
  )
}

export default App
