import React from 'react';
import ApexChart from '../../../(components)/areaChart/AreaChart'; // Assuming the file is in the same directory
import Image from 'next/image';
import { IMEGES, PATIENTS } from '@/app/constant/assets/allAssets';
import PieChart from '@/app/(components)/pieChart/PieChart';


export default function page() {
  return (
    <>
    <p className='text-[17px] py-3 ps-2'>Dashboad Summary</p>
<div className='flex'>
<div className='w-[358px] h-[191px] bg-slate-200'>
      <div className='flex justify-between px-4 pt-4'>
        <p>Offline Consultations</p>
        <Image src={PATIENTS.Options} alt='options'/>
      </div>
      <div className='flex justify-between px-4'>
<div className='flex flex-col'>
<p className='text-[37px] pt-4 pb-2'>101</p>
<div className='flex'>
<Image src={IMEGES.Up} alt='up'/>
<p className='text-[15px] text-[#27AE60] ps-2'>+3.11%</p>
</div>
</div>
      <ApexChart/>
      </div>
    </div>
    <div className='w-[358px] h-[191px] bg-slate-200 mx-2'>
      <div className='flex justify-between px-4 pt-4'>
        <p>Online Consultations</p>
        <Image src={PATIENTS.Options} alt='options'/>
      </div>
      <div className='flex justify-between px-4'>
<div className='flex flex-col'>
<p className='text-[37px] pt-4 pb-2'>96</p>
<div className='flex'>
<Image src={IMEGES.Upred} alt='upred'/>
<p className='text-[15px] text-[#27AE60] ps-2'>-20.9%</p>
</div>
</div>
      <ApexChart/>
      </div>
    </div>
    <div className='w-[358px] h-[191px] bg-slate-200 mx-2'>
      <div className='flex justify-between px-4 pt-4'>
        <p>Online Consultations</p>
        <Image src={PATIENTS.Options} alt='options'/>
      </div>
      <div className='flex justify-between px-4'>
<div className='flex flex-col'>
<p className='text-[37px] pt-4 pb-2'>196</p>
</div>
  <div className='-mt-12'>
  <PieChart/>
  </div>
      </div>
    </div>
</div>
    </>
  )
}

