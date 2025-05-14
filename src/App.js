import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import LazyLoad from './Components/lazyLoading/Loading'

import EmployerHome from './Pages/EmployerPages/EmployerHome'
import EmployerLogin from './Pages/EmployerPages/EmployerLogin'
import EmployerSignup from './Pages/EmployerPages/EmployerSignup'
import EmployerUserDetails from './Context/EmployerUserDetails'
import ProfileMainpage from './Pages/EmployerPages/ProfileMainpage'

import JobpostContext from './Context/JobpostContext'

import AccountSettings from './Pages/EmployerPages/AccountSettings'
import GoogleAuth from './Pages/common/Googleauth'
import JobMenu from './Pages/EmployerPages/JobMenu'

//Lazy Loading seeker pages
const Home = lazy(() => import('./Pages/UserPages/Home'))
const Siginup = lazy(() => import('./Pages/UserPages/Siginup'))
const Login = lazy(() => import('./Pages/UserPages/Loginn'))
const Userprofile = lazy(() => import('./Pages/UserPages/UserProfile'))
const Jobview = lazy(() => import('./Pages/UserPages/Jobview'))
const Applyjob = lazy(() => import('./Pages/UserPages/Applyjob'))

function App () {
  return (
    <>
      <JobpostContext>
        <EmployerUserDetails>
          <Suspense fallback={<LazyLoad></LazyLoad>}>
            <Routes>
              {/*User routes */}
              <Route path='/' element={<Home />} />
              <Route path='/signup' element={<Siginup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={<Userprofile />} />
              <Route path='/jobview' element={<Jobview />} />
              <Route path='/applyjob' element={<Applyjob />} />

              {/*Empolyer routes*/}
              <Route path='/employer' element={<EmployerHome />} />
              <Route path='/employerlogin' element={<EmployerLogin />} />
              <Route path='/employersignup' element={<EmployerSignup />} />
              <Route path='/employerprofile' element={<ProfileMainpage />} />
              
              
              <Route
                path='/profile/accountsetting'
                element={<AccountSettings />}
              />
              <Route path='/profile/jobmenu' element={<JobMenu />} />

            

              <Route path='/callback' element={<GoogleAuth></GoogleAuth>}/>
            </Routes>
          </Suspense>
        </EmployerUserDetails>
      </JobpostContext>
    </>
  )
}

export default App
