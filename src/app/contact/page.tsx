import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="relative w-full h-[316px] bg-[url('/images/s-1.png')] bg-cover bg-center flex justify-center items-center flex-col">
        <span>
          <Image src="/images/Logo-1.png" alt="Logo-1" width={77} height={77} />
        </span>
        <h2 className="font-Poppins font-medium text-4xl sm:text-5xl text-[#000000]">Contact</h2>
        <div className="flex items-center mt-2">
          <p className="font-Poppins font-medium text-base leading-6">Home</p>
          <Image src="/images/sign.png" alt="sign" width={20} height={20} className="mx-2" />
          <p className="font-Poppins font-light">Contact</p>
        </div>
      </div>

      {/* Get Into Touch Section */}
      <section>
        <div className="m-4 md:m-10">
          <h1 className="font-Poppins font-semibold text-3xl md:text-4xl leading-[54px] text-center">
            Get In Touch With Us
          </h1>
          <p className="text-center font-Poppins font-normal text-sm md:text-base leading-6 text-[#9F9F9F] mt-4">
            For More Information About Our Product & Services. Please Feel Free To Drop Us <br />
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 p-4 md:p-10">
          {/* Left Column - Contact Details */}
          <div className="flex flex-col gap-10 w-full lg:w-1/2">
            {/* Address Section */}
            <div className="flex gap-4 items-start">
              <Image src="/images/address.png" alt="Address" width={18} height={18} />
              <div>
                <h1 className="font-Poppins font-medium text-xl md:text-2xl leading-9 text-[#000000]">
                  Address
                </h1>
                <p className="mt-1 font-Poppins text-sm md:text-base leading-6">
                  236 5th SE Avenue, New <br />
                  York NY10000, United <br />
                  States
                </p>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex gap-4 items-start">
              <Image src="/images/phone.png" alt="Phone" width={18} height={18} />
              <div>
                <h1 className="font-Poppins font-medium text-xl md:text-2xl leading-9 text-[#000000]">
                  Phone
                </h1>
                <p className="mt-1 font-Poppins text-sm md:text-base leading-6">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time Section */}
            <div className="flex gap-4 items-start">
              <Image src="/images/clock.png" alt="Clock" width={18} height={18} />
              <div>
                <h1 className="font-Poppins font-medium text-xl md:text-2xl leading-9 text-[#000000]">
                  Working Time
                </h1>
                <p className="mt-1 font-Poppins text-sm md:text-base leading-6">
                  Monday-Friday: 9:00 - <br /> 22:00 <br />
                  Saturday-Sunday: 9:00 - <br /> 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-[50%] p-4 rounded-lg shadow-md bg-white">
            <form className="flex flex-col gap-4">
              <label className="font-Poppins font-medium text-sm md:text-base">Your Name</label>
              <input
                type="text"
                placeholder="Abc"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />

              <label className="font-Poppins font-medium text-sm md:text-base">Email Address</label>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />

              <label className="font-Poppins font-medium text-sm md:text-base">Subject</label>
              <input
                type="text"
                placeholder="This is an optional"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />

              <label className="font-Poppins font-medium text-sm md:text-base">Message</label>
              <textarea
                placeholder="Hi! I’d like to ask about"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full md:w-auto bg-[#B88E2F] text-white px-6 py-3 rounded-md mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom-bar */}
      <div className="w-full h-auto py-8 bg-[#FAF3EA]">
        <div className="w-full max-w-[1334px] mx-auto flex flex-wrap gap-4 justify-center md:justify-between items-center">
          <Image src="/images/Frame-1.png" alt="Frame-1" width={150} height={50} />
          <Image src="/images/Frame-2.png" alt="Frame-2" width={150} height={50} />
          <Image src="/images/Frame-3.png" alt="Frame-3" width={150} height={50} />
          <Image src="/images/Frame-4.png" alt="Frame-4" width={150} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
