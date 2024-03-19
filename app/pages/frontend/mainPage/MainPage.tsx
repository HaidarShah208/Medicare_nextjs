'use client'
import React, { useState, useEffect } from 'react';
import Header from '@/app/(components)/header/Header';
import Sidebar from '@/app/(components)/sidebar/Sidebar';


interface MainPageProps {
  children: React.ReactNode;
}
const MainPage: React.FC<MainPageProps> = ({children}) => {
  const [sidebar, setSidebar] = useState<boolean>(true);  
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);  
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleSidebar = () => {
    if (!isSmallScreen) return;  
    setSidebar(prevSidebar => !prevSidebar);
  };

  

  return (
    <div>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div>
        <Sidebar sidebar={!isSmallScreen || sidebar} handleToggleSidebar={handleToggleSidebar} />
        <div className={`flex-grow ${isSmallScreen && !sidebar ? 'ml-2' : 'sm:ml-64 ml-35'}`}>
        {children}
      </div>
      </div>
    </div>
  );
};

export default MainPage;
