import { PATIENTS } from '@/app/constant/assets/allAssets'
import Image from 'next/image'
import React from 'react'

function Patients() {
  return (
    <>
    <p className='ps-3 mb-5 mt-2'>Patient register</p>
    <div className='h-[72px] w-[1100px] items-center bg-slate-100 flex flex-row justify-between px-7'>
        <div className='jus'><p className=''>Total Patients</p></div>
        <div className='flex'>
            <Image src={PATIENTS.Add} alt='add' className='me-2'/>
            <Image src={PATIENTS.SearchPatient} alt='SearchPatient'/>
            <Image src={PATIENTS.Filter} alt='Filter' className='mx-2'/>
            <Image src={PATIENTS.Info} alt='Info'/>
        </div>
    </div>
    <div className='mt-2  w-[1100px]'>
    <table className="min-w-full divide-y bg-gray-200">
      <thead className="border-b h-[65px] border-gray-200">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-[#828282] uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-[#828282] uppercase tracking-wider">Dignosis</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-[#828282] uppercase tracking-wider">Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-[#828282] uppercase tracking-wider">Last Appointment</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-[#828282] uppercase tracking-wider">Next Appointment</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-[#828282] uppercase tracking-wider">Options</th>
        </tr>
      </thead>
      <tbody className="divide-y ">
        <tr className="bg-gray-100 h-[72px]">
          <td className="px-6 py-4 whitespace-nowrap">Zain</td>
          <td className="px-6 py-4 whitespace-nowrap">Malaria</td>
          <td className="px-6 py-4 whitespace-nowrap"><p className='bg-green-200  w-[140px] h-[25px] rounded-t-3xl rounded-b-3xl text-[12px] text-center pt-1 text-[#27AE60]'>Recovered</p></td>
          <td className="px-6 py-4 whitespace-nowrap">Data 4</td>
          <td className="px-6 py-4 whitespace-nowrap">Data 5</td>
          <td className="px-6 py-4 whitespace-nowrap "><Image src={PATIENTS.Options} alt='option' className='ms-4'/></td>
        </tr>
      </tbody>
    </table>
    </div>
    </>
  )
}

export default Patients
