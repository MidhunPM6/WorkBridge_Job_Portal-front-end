import React, { Fragment } from 'react'
import AccountSetting from '../../Employer-Components/AccountSettings/AccountSettings'
import Navbar from '../../Employer-Components/Employer_main/Navbar'
import Footer from '../../Employer-Components/Footer/Footer'

const AccountSettings = () => {
  return (
    <div>
      <Navbar></Navbar>
      <AccountSetting></AccountSetting>
      <Footer></Footer>
    </div>
  )
}

export default AccountSettings
