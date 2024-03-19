import { DASHBOARD } from '@/app/constant/assets/allAssets'
import Image from 'next/image'
import React from 'react'

function Setting() {
  return (
    <div className=''>
    <p className='ps-3 mb-5 mt-2'>Patient register</p>
       <div className='h-[72px] w-[1100px] items-center bg-slate-100 flex flex-row justify-between px-7'>
        <div className='jus'><p className=''>Total Patients</p></div>
        <div className='flex'>
        <Image src={DASHBOARD.Question} alt='question'/>
    </div>
    </div>
    </div>
  )
}

export default Setting
