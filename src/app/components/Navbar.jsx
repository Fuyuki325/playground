import React from 'react'
import Image from 'next/image';
import TailwindLogo from '@/app/assets/TailwindLogo.png'
const Navbar = () => {
  return (
    <div className='fixed flex top-0 w-full bg-red-500'>
        <Image
          src={TailwindLogo}
          className='inline' 
          width={100}
          alt="logo"
        />
        <nav className='hidden mx-auto lg:flex static'>
          <div>
            <a className='px-12'>1</a>
            <a className='px-12'>2</a>
            <a className='px-12'>3</a>
            <a className='px-12'>4</a>

          </div>
        </nav>
        <div className='inline'>second</div>
    </div>
  )
}

export default Navbar;