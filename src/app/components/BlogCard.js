import React from 'react'

export default function BlogCard({
  pic,
  category,
  date,
  content,
  author,
  photo,
}) {
  return (
    <div className="">
      <div className="rounded-xl w-full mb-6">
        <img src={pic} className="w-full" />
      </div>
      <div className="flex flex-col">
        <span className="flex space-x-3 mb-3 items-center">
          <h4 className="text-base font-bold">{category}</h4>
          <p className="text-base text-gray-500">{date}</p>
        </span>
        <h2 className="text-xl w-full md:w-[300px] mb-5">{content}</h2>
      </div>
      <div className="flex items-center space-x-3">
        <div className="h-8 w-8 rounded-full bg-gray-300">{photo}</div>
        <h3 className="text-base">{author}</h3>
      </div>
    </div>
  )
}
