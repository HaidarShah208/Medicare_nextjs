import React from "react";
import { IMEGES } from "@/app/constant/assets/allAssets";
import Image from "next/image";

interface HeaderProps {
  handleToggleSidebar: () => void; 
}

function Header({ handleToggleSidebar }: HeaderProps) {
  return (
    <div className="border border-dark header flex justify-between items-center bg-black-primary w-full px-4 h-[92px]">
        <Image className="block md:hidden pe-1"
          src={IMEGES.Toggle}
          alt="toggle"
          onClick={() => handleToggleSidebar()}
        />
     <Image src={IMEGES.Logo} alt={"logo"} />
      <p className="text-[#0000AC] hidden md:block text-[37px] mx-3 border-e pe-4">Medicare</p>
      <form className="flex flex-1 bg-black-primary border border-gray-400 rounded mx-3 sm:mx-7">
        <input
          type="text"
          placeholder="Search"
          className=" border-none focus:border-transparent focus:outline-none font-light bg-transparent p-1 h-[40px] w-auto sm:w-[580px]"
        />
        <button type="submit" className="border-none bg-transparent">
          <Image src={IMEGES.Search} alt={"logo"}  />
        </button>
      </form>
      <div className="flex-col h-[50px] sm:w-[108px] sm:pt-0 pt-4 w-full me-3"><p className="text-end sm:text-[15px] text-[8px]">Joen Doe</p><p className="text-end sm:text-[15px] text-[7px]">General Doctor</p></div>
      <div className="sm:w-[137px] w-[120px] sm:text-[15px] text-[10px] h-[40px] border border-gray-400 rounded justify-center text-center pt-2 me-3">20,October 2024</div>
      <div className="header_icons flex items-center space-x-4">
        <Image src={IMEGES.Email} alt={"logo"} />
        <Image src={IMEGES.Notification} alt={"logo"} />
        <Image src={IMEGES.Logout} alt={"logo"} />
      </div>
    </div>
  );
}

export default Header;
