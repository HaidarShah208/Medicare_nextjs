// "use client"
import Dashboard from './pages/frontend/dashboard/page'
import MainPage from './pages/frontend/mainPage/MainPage'
import Tasks from './pages/frontend/tasks/page'

export default function page() {

  return (
    <>
<MainPage>
      <Dashboard /> 
      <Tasks/>
    </MainPage>
    </>
  )
}
