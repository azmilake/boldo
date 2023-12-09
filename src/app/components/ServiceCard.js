import React from 'react'

export default function ServiceCard({ img, service, desc, link }) {
  return (
    <div className="flex flex-col">
      <img src={img} className="mb-6" />
      <h3 className="text-xl md:text-2xl mb-3">{service}</h3>
      <p className="textlg md:text-xl text-[#777777] mb-7">{desc}</p>
      <span className="flex items-center space-x-3 text-md md:text-xl font-bold text-[#0A2640]">
        <a href={link}>Explore page</a>
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 font-bold"
        >
          <path
            d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
            fillRule="nonzero"
          />
        </svg>
      </span>
    </div>
  )
}
