import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import LazyLoad from './Components/common/DotLoading/Loading'
import EmployerHome from './Pages/EmployerPages/EmployerHome'
import EmployerLogin from './Pages/EmployerPages/EmployerLogin'
import EmployerSignup from './Pages/EmployerPages/EmployerSignup'
import ProfileMainpage from './Pages/EmployerPages/ProfileMainpage'
import AccountSettings from './Pages/EmployerPages/AccountSettings'

import JobMenu from './Pages/EmployerPages/JobMenu'
import Candidateprofile from './Pages/EmployerPages/Candidateprofile'
import ChattingWindow from './Pages/common/ChattingWindow'
import CompanyProfileView from './Pages/UserPages/CompanyProfileView'

//Lazy Loading seeker pages
const Home = lazy(() => import('./Pages/UserPages/Home'))
const Siginup = lazy(() => import('./Pages/UserPages/Siginup'))
const Login = lazy(() => import('./Pages/UserPages/Loginn'))
const Userprofile = lazy(() => import('./Pages/UserPages/UserProfile'))
const Jobview = lazy(() => import('./Pages/UserPages/Jobview'))

function App () {
  return (
    <>
      <Suspense fallback={<LazyLoad></LazyLoad>}>
        <Routes>
          {/* common routes */}

          <Route path='/chatWindow' element={<ChattingWindow />} />

          {/*User routes */}
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Siginup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Userprofile />} />
          <Route path='/jobview' element={<Jobview />} />
          <Route path='/companyProfileView' element={<CompanyProfileView />} />

          {/*Empolyer routes*/}
          <Route path='/employer' element={<EmployerHome />} />
          <Route path='/employerlogin' element={<EmployerLogin />} />
          <Route path='/employersignup' element={<EmployerSignup />} />
          <Route path='/employerprofile' element={<ProfileMainpage />} />
          <Route path='/candidateProfile' element={<Candidateprofile />} />
          <Route path='/profile/accountsetting' element={<AccountSettings />} />
          <Route path='/profile/jobmenu' element={<JobMenu />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
