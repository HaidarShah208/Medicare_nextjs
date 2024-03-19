"use client"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/frontend/dashboard/page'
import MainPage from './pages/frontend/mainPage/MainPage'
import Patients from './pages/frontend/patients/page'
import Tasks from './pages/frontend/tasks/page'
import Setting from './pages/frontend/setting/page'
import Schedule from './pages/frontend/scheduale/page'
import Signup from './pages/auth/signup/page'
import Login from './pages/auth/login/page'

export default function page() {

  return (
    <>
    <Signup/>
    {/* <Login/> */}
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage><Dashboard/></MainPage>}/>
      <Route path='/patients' element={<MainPage><Patients/></MainPage>}/>
      <Route path='/setting' element={<MainPage><Setting/></MainPage>}/>
      <Route path='/schedule' element={<MainPage><Schedule/></MainPage>}/>
    </Routes>
    </BrowserRouter> */}
    </>
  )
}
