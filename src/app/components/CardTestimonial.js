import React from 'react'

export default function CardTestimonial({ title, name, role }) {
  return (
    <div className="gap-x-5">
      <div className="p-10 bg-white rounded-xl">
        <h2 className="text-2xl mb-10">{title}</h2>
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-black"></div>
          <div className="flex flex-col space-y-[6px]">
            <h3 className="text-base font-bold">{name}</h3>
            <p className="text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
