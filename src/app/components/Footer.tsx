import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-[#FFFFFF] flex justify-center items-center border-y-2 py-10">
      <div className="w-full max-w-[1240px] px-4 sm:px-8 flex flex-col sm:flex-row justify-between gap-12 sm:gap-20">
        {/* Brand and Address */}
        <div>
          <h2 className="font-Poppins font-bold text-xl sm:text-2xl leading-9 text-[#000000]">
            Funiro.
          </h2>
          <p className="mt-4 font-Poppins font-normal text-sm sm:text-base leading-6 text-[#9F9F9F]">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col">
          <h3 className="text-[#9F9F9F] font-Poppins font-medium text-sm sm:text-base leading-6 mb-4">
            Links
          </h3>
          <ul className="space-y-2">
            {['Home', 'Shop', 'About', 'Contact'].map((link, index) => (
              <li
                key={index}
                className="font-Poppins font-medium text-sm sm:text-base leading-6 text-[#000000] hover:text-[#B88E2F] transition-colors"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Help Section */}
        <div className="flex flex-col">
          <h3 className="font-Poppins font-medium text-sm sm:text-base leading-6 text-[#9F9F9F] mb-4">
            Help
          </h3>
          <ul className="space-y-2">
            {['Payment Options', 'Returns', 'Privacy Policies'].map(
              (help, index) => (
                <li
                  key={index}
                  className="font-Poppins font-medium text-sm sm:text-base leading-6 text-[#000000] hover:text-[#B88E2F] transition-colors"
                >
                  {help}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-4">
          <h3 className="font-Poppins font-medium text-sm sm:text-base leading-6 text-[#9F9F9F]">
            Newsletter
          </h3>
          <form className="flex flex-col sm:flex-row sm:items-center gap-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full sm:w-auto flex-grow p-2 border rounded-md font-Poppins font-normal text-sm sm:text-base text-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#B88E2F] text-white font-Poppins font-medium text-sm sm:text-base rounded-md hover:bg-[#9e7b26] transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
