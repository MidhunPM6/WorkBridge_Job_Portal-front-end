import { Routes, Route } from 'react-router-dom'
import Home from './Pages/UserPages/Home'
import ServicePage from './Components/Jobseeker-Components/Services/Services'
import Siginup from './Pages/UserPages/Siginup'
import Login from './Pages/UserPages/Loginn'
import EmployerHome from './Pages/EmployerPages/EmployerHome'
import EmployerLogin from './Pages/EmployerPages/EmployerLogin'
import EmployerSignup from './Pages/EmployerPages/EmployerSignup'
import SeekerUsernameContext from './Context/SeekerContext'
import UserProfile from './Pages/UserPages/UserProfile'
import Jobview from './Pages/UserPages/Jobview'
import Applyjob from './Pages/UserPages/Applyjob'
import EmployerUserDetails from './Context/EmployerUserDetails'
import ProfileMainpage from './Pages/EmployerPages/ProfileMainpage'
import Postjob from './Pages/EmployerPages/Postjob'
import JobpostContext from './Context/JobpostContext'
import UserDetailsContext from './Context/UserDetailsContext'
import SeletedJobContext from './Context/SeletedJobContext'
import RecivedApplication from './Pages/EmployerPages/RecivedApplication'

function App () {
  return (
    <>
      <JobpostContext>
        <EmployerUserDetails>
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
                  <Route
                    path='/employerprofile'
                    element={<ProfileMainpage />}
                  />
                  <Route path='/postjob' element={<Postjob />} />
                  <Route
                    path='/recApplication'
                    element={<RecivedApplication />}
                  />
                </Routes>
              </SeletedJobContext>
            </UserDetailsContext>
          </SeekerUsernameContext>
        </EmployerUserDetails>
      </JobpostContext>
    </>
  )
}

export default App
 