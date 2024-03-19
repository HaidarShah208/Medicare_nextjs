import { PATIENTS, SCHEDUALE } from '@/app/constant/assets/allAssets'
import Image from 'next/image'
import React from 'react'

function Schedule() {
  return (
    <>
       <p className='ps-3 mb-5 mt-2'>Schedule</p>
    <div className='h-[72px] w-[1100px] items-center bg-slate-100 flex flex-row justify-between px-7'>
        <div className='jus'><p className=''>Total Patients</p></div>
        <div className='flex'>
            <Image src={PATIENTS.Add} alt='add' className='me-2'/>
            <Image src={PATIENTS.Filter} alt='Filter' className='mx-2'/>
            <Image src={SCHEDUALE.Print} alt='print'/>
            <Image src={PATIENTS.Info} alt='Info'/>
        </div>
    </div>
    </>
  )
}

export default Schedule
