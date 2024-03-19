import React from "react";
import ApexChart from "../../../(components)/areaChart/AreaChart"; // Assuming the file is in the same directory
import Image from "next/image";
import { DASHBOARD, IMEGES, PATIENTS } from "@/app/constant/assets/allAssets";
import DonutChart from "@/app/(components)/pieChart/PieChart";

export default function Dashboard() {
  return (
    <>
      <p className="text-[17px] py-3 ps-2">Dashboad Summary</p>
      <div className="flex">
        <div className="w-[358px] h-[191px] bg-slate-200">
          <div className="flex justify-between px-4 pt-4">
            <p>Offline Consultations</p>
            <Image src={PATIENTS.Options} alt="options" />
          </div>
          <div className="flex justify-between px-4">
            <div className="flex flex-col">
              <p className="text-[37px] pt-4 pb-2">101</p>
              <div className="flex">
                <Image src={IMEGES.Up} alt="up" />
                <p className="text-[15px] text-[#27AE60] ps-2">+3.11%</p>
              </div>
            </div>
            <ApexChart />
          </div>
        </div>
        <div className="w-[358px] h-[191px] bg-slate-200 mx-2">
          <div className="flex justify-between px-4 pt-4">
            <p>Online Consultations</p>
            <Image src={PATIENTS.Options} alt="options" />
          </div>
          <div className="flex justify-between px-4">
            <div className="flex flex-col">
              <p className="text-[37px] pt-4 pb-2">96</p>
              <div className="flex">
                <Image src={IMEGES.Upred} alt="upred" />
                <p className="text-[15px] text-[#27AE60] ps-2">-20.9%</p>
              </div>
            </div>
            <ApexChart />
          </div>
        </div>
        <div className="w-[358px] h-[191px] bg-slate-200">
          <div className="flex justify-between px-4 pt-4">
            <p>Total Paitents</p>
            <Image src={PATIENTS.Options} alt="options" />
          </div>
          <div className="flex justify-between px-4">
            <div className="flex flex-col">
              <p className="text-[37px] pt-4 pb-2">96</p>
            </div>
            <DonutChart series={[44, 55]} />
          </div>
        </div>
      </div>
  <div className="flex">
  <div className=" mt-3 justify-center w-[709px] ">
        <div className="flex justify-between">
          <p>Tasks</p>
          <div className="flex">
            <p className="">Tasks</p>
            <Image
              src={PATIENTS.Add}
              alt="add"
              className="mx-3 w-[23px] h-[23px]"
            />
          </div>
        </div>
        <div className=" bg-slate-200 w-[696px] mt-4 h-[101px] flex flex-col justify-center">
          <div className="flex  justify-between">
            <div className="flex">
              <Image
                src={DASHBOARD.Tick}
                alt="add"
                className="mx-3 w-[23px] h-[23px]"
              />
              <p>Task Completed Successfully</p>
            </div>
            <div>
              <Image
                src={DASHBOARD.Option}
                alt="add"
                className="mx-3 w-[23px] h-[23px]"
              />
            </div>
          </div>
          <div className="flex justify-end me-12">
            <p>2/3/2024</p>{" "}
          </div>
          <div>
            <p className="text-[12px] ps-12">
              Sign up for Covid - 19 training course for madicines
            </p>
          </div>
        </div>
        <div className=" bg-slate-200 w-[696px] mt-4 h-[101px] flex flex-col justify-center">
          <div className="flex  justify-between">
            <div className="flex">
              <Image
                src={DASHBOARD.Tick}
                alt="add"
                className="mx-3 w-[23px] h-[23px]"
              />
              <p>Task Completed Successfully</p>
            </div>
            <div>
              <Image
                src={DASHBOARD.Option}
                alt="add"
                className="mx-3 w-[23px] h-[23px]"
              />
            </div>
          </div>
          <div className="flex justify-end me-12">
            <p>2/3/2024</p>{" "}
          </div>
          <div>
            <p className="text-[12px] ps-12">
              Sign up for Covid - 19 training course for madicines
            </p>
          </div>
        </div>
      </div>
      <div className="w-[384px] mt-3 ps-2 pt-2 bg-gray-200">
       <div className="flex justify-between">
     <p className="text-[15px] font-bold">Upcomming Schedule</p>
     <div className="flex ">
       <div>   <p>New appointment </p></div>
         <div> <Image
            src={PATIENTS.Add}
            alt="add"
            className="mx-3 w-[23px] h-[23px]"
          /></div>
        </div>
       </div>
      </div>
  </div>
    </>
  );
}
