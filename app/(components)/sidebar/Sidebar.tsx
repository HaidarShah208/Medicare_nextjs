import { IMEGES, SIDEBAR } from '@/app/constant/assets/allAssets'
import Image from 'next/image'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


interface SidebarProps {
    sidebar: boolean;
    handleToggleSidebar: (isOpen: boolean) => void; 
    
  }
function Sidebar({sidebar, handleToggleSidebar}:SidebarProps) {
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  const navigate = useNavigate();

  const handleItemClick = (path: string,itemName: string) => {
    handleToggleSidebar(false);  
    navigate(path);  
    setSelectedItem(itemName)
  };
  const isItemSelected = (itemName: string) => selectedItem === itemName;

  return (
    <nav className={`fixed top-30 left-0 h-screen  bg-white w-[90px] sm:w-[245px] text-[#828282] z-50 border-e transition-transform transform ${sidebar ? 'translate-x-0' : '-translate-x-full z-50 md:translate-x-0'}`}>
      <p className='ps-6 pt-3 text-[12px] text-[#828282]'>MENU</p>
      <li className={`flex items-center py-3 px-6  cursor-pointer ${isItemSelected('Dashboard') && 'text-[#0000AC] border-s-4 border-[#0000AC]' }`} onClick={() => handleItemClick('/','Dashboard')}>
      <Image src={isItemSelected('Dashboard') ? SIDEBAR.DashboardFocus : SIDEBAR.Dashboard} alt={'Dashboard'}/>
        <span className="ml-4 font-medium hidden sm:block">Dashboard</span>
      </li>
      <li className={`flex items-center py-3 px-6 cursor-pointer ${isItemSelected('Schedule') && 'text-[#0000AC] border-s-4  border-[#0000AC]' }`} onClick={() => handleItemClick('/schedule','Schedule')} >
      <Image src={isItemSelected('Schedule') ? SIDEBAR.SchedualeFocus : SIDEBAR.Calender} alt={'Calender'}/>
        <span className="ml-4 font-medium hidden sm:block">Schedule</span>
      </li>
      <li className="flex items-center py-3 px-6 cursor-pointer">
      <Image src={SIDEBAR.Task} alt={'Task'}/>
        <span className="ml-4 font-medium hidden sm:block">Task</span>
      </li>
     <li className={`flex items-center py-3 px-6 cursor-pointer ${isItemSelected('Patients') && 'text-[#0000AC] border-s-4  border-[#0000AC]' }`} onClick={() => handleItemClick('/patients', 'Patients')}>
      <Image src={isItemSelected('Patients') ? SIDEBAR.PetientFocus : SIDEBAR.Petient} alt={'Petient'}/>
        <span className="ml-4 font-medium hidden sm:block">Patients</span>
      </li>
 

      <li className="flex items-center py-3 px-6 cursor-pointer">
      <Image src={SIDEBAR.Message} alt={'Message'}/>
        <span className="ml-4 font-medium hidden sm:block">Message</span>
      </li>
      <li className="flex items-center py-3 px-6 cursor-pointer">
      <Image src={SIDEBAR.Analytics} alt={'Message'}/>
        <span className="ml-4 font-medium hidden sm:block">Analytics</span>
      </li>
      <div className="flex justify-center">
    <hr className="border-t  my-3 w-[168px]" />
</div>
      <p className='ps-7 pt-3 text-[12px] text-[#828282]'>General</p>
      <li className={`flex items-center py-3 px-6 cursor-pointer ${isItemSelected('Setting') && 'text-[#0000AC] border-s-4  border-[#0000AC]' }`} onClick={() => handleItemClick('/setting','Setting')}>
      <Image src={isItemSelected('Setting') ? SIDEBAR.SettingFocus : SIDEBAR.Setting} alt={'Setting'}/>
        <span className="ml-4 font-medium hidden sm:block">Setting</span>
      </li>
      <li className="flex items-center py-3 px-6 cursor-pointer">
      <Image src={SIDEBAR.Support} alt={'Setting'}/>
        <span className="ml-4 font-medium hidden sm:block">Support</span>
      </li>
      <li className="flex items-center py-3 px-6 cursor-pointer">
      <Image src={IMEGES.Logout} className='sm:hidden block' alt={'logout'}/>
      </li>
    </nav>
  )
}

export default Sidebar
