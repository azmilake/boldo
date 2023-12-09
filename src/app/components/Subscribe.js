import React from 'react'

export default function Subscribe() {
  return (
    <section className="max-w-7xl md:mx-auto bg-[#0A2640] h-full md:h-[400px] rounded-xl mb-20 py-[72px] flex flex-col items-center justify-center text-white mx-5">
      <h1 className="text-2xl md:text-5xl w-full md:w-[716px] text-center leading-snug mb-12">
        An enterprise template to ramp up your company website
      </h1>

      <span className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-5 md:space-y-0">
        <input
          className="py-3 md:py-4 px-6 md:px-8 rounded-full bg-white text-black w-full md:w-[370px]"
          placeholder="Your email address"
        />
        <button className="bg-[#65E4A3] rounded-full py-3 md:py-4 px-8 md:px-14 text-lg md:text-xl font-bold text-[#0A2640]">
          Start now
        </button>
      </span>
    </section>
  )
}
