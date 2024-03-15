import { SIDEBAR } from '@/app/constant/assets/allAssets'
import Image from 'next/image'
import React from 'react'


interface SidebarProps {
    sidebar: boolean;
    handleToggleSidebar: (isOpen: boolean) => void; 
    
  }
function Sidebar({sidebar, handleToggleSidebar}:SidebarProps) {
  

  return (
    <nav className={`fixed top-30 left-0 h-screen bg-white w-[245px] text-[#828282] z-50 border-e transition-transform transform ${sidebar ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
      <p className='ps-6 pt-3 text-[12px] text-[#828282]'>MENU</p>
      <li className="flex items-center py-3 px-6 mt-1 cursor-pointer" >
      <Image src={SIDEBAR.Dashboard} alt={'Dashboard'}/>
        <span className="ml-4 font-medium">Dashboard</span>
      </li>
      <li className="flex items-center py-3 px-6 cursor-pointer">
      <Image src={SIDEBAR.Calender} alt={'Calender'}/>
        <span className="ml-4 font-medium">Schedule</span>
      </li>
      <li className="flex items-center py-3 px-6 cursor-pointer">
      <Image src={SIDEBAR.Task} alt={'Task'}/>

        <span className="ml-4 font-medium">Task</span>
      </li>
      <li className="flex items-center py-3 px-6 cursor-pointer">
      <Image src={SIDEBAR.Petient} alt={'Petient'}/>
        <span className="ml-4 font-medium">Patients</span>
      </li>
      <li className="flex items-center py-3 px-6 cursor-pointer">
      <Image src={SIDEBAR.Message} alt={'Message'}/>
        <span className="ml-4 font-medium">Message</span>
      </li>
      <li className="flex items-center py-3 px-6 cursor-pointer">
      <Image src={SIDEBAR.Analytics} alt={'Message'}/>
        <span className="ml-4 font-medium">Analytics</span>
      </li>
      <div className="flex justify-center">
    <hr className="border-t  my-3 w-[168px]" />
</div>
      <p className='ps-7 pt-3 text-[12px] text-[#828282]'>General</p>
      <li className="flex items-center py-3 px-6 cursor-pointer">
      <Image src={SIDEBAR.Setting} alt={'Setting'}/>
        <span className="ml-4 font-medium">Setting</span>
      </li>
      <li className="flex items-center py-3 px-6 cursor-pointer">
      <Image src={SIDEBAR.Support} alt={'Setting'}/>
        <span className="ml-4 font-medium">Support</span>
      </li>
    </nav>
  )
}

export default Sidebar
