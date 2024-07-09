import React from 'react'
import Logo from "../public/images/logo-white.png"
import Image from 'next/image'

export const Footer = () => {
  return (
    <div className='bg-[#66af6d] p-3 md:px-24'>
        <ul className='grid grid-cols-2 md:grid-cols-4 items-center text-white font-semibold'>
            
            <li className='flex'><Image src={Logo} alt='logo' height={10} width={10} className='h-3 my-auto mx-2' /> Reduce</li>
            <li className='flex'><Image src={Logo} alt='logo' height={10} width={10} className='h-3 my-auto mx-2' /> Reuse</li>
            <li className='flex'><Image src={Logo} alt='logo' height={10} width={10} className='h-3 my-auto mx-2' /> Recycle</li>
            <li className='flex'><Image src={Logo} alt='logo' height={10} width={10} className='h-3 my-auto mx-2' /> Redeem</li>
        </ul>
    </div>
  )
}
