// "use client"
import Dashboard from './pages/frontend/dashboard/page'
import MainPage from './pages/frontend/mainPage/MainPage'
import Patients from './pages/frontend/patients/Patients'
import Tasks from './pages/frontend/tasks/page'

export default function page() {

  return (
    <>
<MainPage>
       <Dashboard /> 
      {/*<Tasks/> */}
      {/* <Patients/> */}
    </MainPage>
    </>
  )
}
