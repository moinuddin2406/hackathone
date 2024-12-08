import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='w-full h-[100px] bg-[#FFFFFF] flex justify-center items-center '>
        <div className='w-full h-auto max-w-[1286px] px-6 flex justify-between items-center'>
        {/* logo */}
      <div className='w-[185px] h-auto gap-[5px]'>
        <Image src="/images/logo.png" alt='logo' width={185} height={41}/>
      </div>
      {/* Navbar */}
      <div className='hidden md:block text-[#000000]'>
        <ul className='flex gap-6 md:gap-10'>
        <li className="cursor-pointer hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:underline">
          <Link href="/shop">Shop</Link>
        </li>
        <li className="cursor-pointer hover:underline">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="cursor-pointer hover:underline">
          <Link href="/contact">Contact</Link>
        </li>
        </ul>
      </div>
       {/* icons */}
      <div className='flex gap-4 md:gap-6'>
      <Image src="/images/ic-1.png" alt='ic-1' width={23.33} height={18.67}/>
      <Image src="/images/ic-2.png" alt='ic-2' width={22.17} height={22.17}/>
      <Image src="/images/ic-3.png" alt='ic-3' width={23.33} height={20.81}/>
      <Image src="/images/ic-4.png" alt='ic-4' width={24.53} height={22.06}/>
      </div>
      </div>
    </div>
  )
}

export default Header
