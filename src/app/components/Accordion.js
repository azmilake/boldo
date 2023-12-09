import React, { useState } from 'react'

const accordionItems = [
  {
    header: 'We connect our customers with the best?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    header: 'Android research & development rockstar? ',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export default function Accordion() {
  const [activeIndexes, setActiveIndexes] = useState([])

  const handleToggle = (index) => {
    setActiveIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((item) => item !== index)
      } else {
        return [...prevIndexes, index]
      }
    })
  }

  return (
    <div className="-mx-4 flex flex-wrap justify-end">
      {accordionItems.map((item, index) => (
        <div key={index} className="w-full px-4">
          <div className="mb-8 w-full text-black border-b pb-4 border-[#C4C4C4]">
            <button
              className={`faq-btn flex w-full text-left`}
              onClick={() => handleToggle(index)}
            >
              <div className="">
                <h4 className="mt-1 text-xl font-semibold mr-0 md:mr-28 w-full md:w-[500px]">
                  {item.header}
                </h4>
              </div>

              <div className="flex h-10 md:h-7 w-10 md:w-7 max-w-[40px] items-center justify-center rounded-full bg-[#0A2640]">
                <svg
                  className={`fill-primary stroke-primary duration-200 ease-in-out ${
                    activeIndexes.includes(index) ? 'rotate-180' : ''
                  }`}
                  width="14"
                  height="14"
                  viewBox="0 0 17 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                    fill="#FFFFFF"
                    stroke=""
                  />
                </svg>
              </div>
            </button>

            <div
              className={`pr-0 md:pr-[62px] duration-200 ease-in-out ${
                activeIndexes.includes(index) ? 'block' : 'hidden'
              }`}
            >
              <p className="py-3 text-base font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
