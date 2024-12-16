import React from 'react'
import Image from 'next/image'
import { IoSearch } from "react-icons/io5";

const Blog = () => {
  return (
    <div>
      {/* Header Section */}
                        <div className="relative w-full h-[316px] bg-[url('/images/s-1.png')] bg-cover bg-center flex justify-center items-center flex-col">
                        <span> <Image src="/images/Logo-1.png" alt="Logo-1" width={77} height={77} className="" /></span>
                          <h2 className="font-Poppins font-medium text-4xl md:text-5xl text-[#000000]">Blog</h2>
                          <div className="flex items-center mt-2">
                            <p className="font-Poppins font-medium text-base leading-6">Home</p>
                            <Image src="/images/sign.png" alt="sign" width={20} height={20} className="mx-2" />
                            <p className="font-Poppins font-light">Blog</p>
                          </div>
                        </div>
                        {/* Design Section */}
                        <section className='min-h-screen flex'>
                            <div className='w-3/4 m-20 py-4'>
                            <Image src="/images/laptop.png" alt="laptop" width={817} height={500} className="" />
                            {/* millenial design */}
                                <h1 className='font-Poppins font-medium text-3xl leading-[45px] text-[#000000] py-5'>Going all-in with millennial design</h1>
                                <p className='font-Poppins font-normal text-[15px] leading-[22.5px] text-[#9F9F9F] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudi <br />aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br /> in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br /> ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                                {/* button */}
                                <button className="w-[89px] h-[36px]  rounded-[2px]  border-1 underline m-2">
                                Read more
                                </button>
                                <Image src="/images/pen.png" alt="pen" width={817} height={500} className="" />
                                <h1 className='font-Poppins font-medium text-3xl leading-[45px] text-[#000000] py-5'>Going all-in with millennial design</h1>
                                <p className='font-Poppins font-normal text-[15px] leading-[22.5px] text-[#9F9F9F] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudi <br />aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br /> in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br /> ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                                {/* button */}
                                <button className="w-[89px] h-[36px]  rounded-[2px]  border-1 underline m-2">
                                Read more
                                </button>
                                <Image src="/images/book.png" alt="book" width={817} height={500} className="" />
                                <h1 className='font-Poppins font-medium text-3xl leading-[45px] text-[#000000] py-5'>Handmade pieces that took time to make</h1>
                                <p className='font-Poppins font-normal text-[15px] leading-[22.5px] text-[#9F9F9F] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudi <br />aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br /> in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br /> ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                                {/* button */}
                                <button className="w-[89px] h-[36px]  rounded-[2px]  border-1 underline m-2">
                                Read more
                                </button>
                            </div>
                            {/*  Right Side*/}
                            <div className="w-1/4  m-10">
  <div className="relative m-8 ">
    {/* Search Icon */}
    <IoSearch className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-500" />
    
    {/* Input Box */}
    <input
      type="text"
      placeholder=""
      className="w-[311px] h-[58px] border border-[#9F9F9F] rounded-[10px] "
    />
  </div>
  <h1 className='font-Poppins font-medium text-3xl leading-[45px] text-[#000000] pl-16 '>Categories</h1>
  <p className='flex justify-around m-12 font-Poppins font-normal text-base leading-6 text-[#9F9F9F]'>Crafts <span>2</span></p>
  <p className='flex justify-around m-12 font-Poppins font-normal text-base leading-6 text-[#9F9F9F]'>Design <span>8</span></p>
  <p className='flex justify-around m-12 font-Poppins font-normal text-base leading-6 text-[#9F9F9F]'> Handmade<span>7</span></p>
  <p className='flex justify-around m-12 font-Poppins font-normal text-base leading-6 text-[#9F9F9F]'> Interior<span>1</span></p>
  <p className='flex justify-around m-12 font-Poppins font-normal text-base leading-6 text-[#9F9F9F]'> Wood<span>6</span></p>
  
  {/* Recent post */}
  <div className='flex flex-col'>
  <h1 className='font-Poppins font-medium text-3xl leading-[px] text-[#000000] m-10 '></h1>Recent Posts
  <span className='flex flex-col m-10  '>
  <Image src="/images/rp-1.png" alt="post" width={80} height={80} className="py-5" /><span>Going all-in with <br /> millennial design</span>
  <Image src="/images/rp-2.png" alt="post" width={80} height={80} className="py-5" /><span>Exploring new ways <br /> of decorating</span>
  <Image src="/images/rp-3.png" alt="post" width={80} height={80} className="py-5" /><span>Handmade pieces <br />that took time to make</span>
  <Image src="/images/rp-4.png" alt="post" width={80} height={80} className="py-5" /><span>Modern home in <br /> Milan</span>
  <Image src="/images/rp-5.png" alt="post" width={80} height={80} className="py-5" /><span>Colorful office <br /> redesign</span>
  </span>
  </div>
</div>


                        </section>
                        
                          {/* Buttons */}
                              <div className="flex justify-center items-center mt-8">
                                <div className="flex gap-4">
                                  <button className="w-[50px] h-[50px] rounded-md bg-[#B88E2F] text-[#FFFFFF]">1</button>
                                  <button className="w-[50px] h-[50px] rounded-md bg-[#F9F1E7] text-[#000000]">2</button>
                                  <button className="w-[50px] h-[50px] rounded-md bg-[#F9F1E7] text-[#000000]">3</button>
                                  <button className="w-[80px] h-[50px] rounded-md bg-[#F9F1E7] text-[#000000]">Next</button>
                                </div>
                              </div>
                        
                              {/* Bottom-bar */}
                              <div className="w-full h-auto bg-[#FAF3EA] p-6">
                                <div className="w-full max-w-[1334px] mx-auto flex flex-wrap gap-4 justify-between items-center">
                                  <Image src={"/images/Frame-1.png"} alt="Frame-1" width={200} height={50} />
                                  <Image src={"/images/Frame-2.png"} alt="Frame-2" width={200} height={50} />
                                  <Image src={"/images/Frame-3.png"} alt="Frame-3" width={200} height={50} />
                                  <Image src={"/images/Frame-4.png"} alt="Frame-4" width={200} height={50} />
                                </div>
                              </div>
    </div>
  )
}

export default Blog
