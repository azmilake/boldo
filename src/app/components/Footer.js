import React from 'react'

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto py-[125px] px-5 lg:px-0">
      {' '}
      <div className="w-[1007px] flex md:flex-row flex-col justify-between items-start">
        <div className="mr-60">
          <ul>
            <img src="/footer-logo.png" className="mb-10" />
            <p className="w-[300px] text-base text-[#777777] mb-16">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <p className="text-base text-[#777777]">All rights reserved.</p>
          </ul>
        </div>
        <div className="mr-40 mt-10 md:mt-0 mb-10 md:mb-0">
          <ul>
            <p className="font-bold text-xl pb-8">Landings</p>
            <li className="text-[#777777] text-md pb-6 hover:text-[#0A2640] cursor-pointer">
              Home
            </li>
            <li className="text-[#777777] text-md pb-6 hover:text-[#0A2640] cursor-pointer">
              Products
            </li>
            <li className="text-[#777777] text-md pb-6 hover:text-[#0A2640] cursor-pointer">
              Services
            </li>
          </ul>
        </div>
        <div className="mr-40 mb-10 md:mb-0">
          <ul>
            <p className="font-bold text-xl pb-8">Company</p>
            <li className="text-[#777777] text-md pb-6 hover:text-[#0A2640] cursor-pointer">
              Home
            </li>
            <li className="text-[#777777] text-md pb-6 hover:text-[#0A2640] cursor-pointer">
              Careers
            </li>
            <li className="text-[#777777] text-md pb-6 hover:text-[#0A2640] cursor-pointer">
              Services
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <p className="font-bold text-xl pb-8">Resources</p>
            <li className="text-[#777777] text-md pb-6 hover:text-[#0A2640] cursor-pointer">
              Blog
            </li>
            <li className="text-[#777777] text-md pb-6 hover:text-[#0A2640] cursor-pointer">
              Products
            </li>
            <li className="text-[#777777] text-md pb-6 hover:text-[#0A2640] cursor-pointer">
              Services
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
