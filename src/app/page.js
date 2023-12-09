'use client'
import { useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import Marquee from 'react-fast-marquee'
import CardTestiData from './utils/cardtestimonialsdata.json'
import CardBlogData from './utils/cardblogdata.json'
import CardServiceData from './utils/cardservicedata.json'
import SliderTestimonial from './components/SliderTestimonial'
import CardTestimonial from './components/CardTestimonial'
import Accordion from './components/Accordion'
import BlogCard from './components/BlogCard'
import ServiceCard from './components/ServiceCard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Subscribe from './components/Subscribe'

const tabs = [
  'We connect our customers with the best.',
  'Advisor success customer launch party.',
  'Business-to-consumer long tail.',
]

const tabInfo = [
  {
    id: 'We connect our customers with the best.',
    content: '/tab-img-1.png',
  },
  {
    id: 'Advisor success customer launch party.',
    content: '/connect-img.png',
  },
  {
    id: 'Business-to-consumer long tail.',
    content: '/tab-img-1.png',
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState(
    'We connect our customers with the best.'
  )

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <>
      <header>
        <Navbar background="[#0A2640]" />
      </header>

      <main>
        <section
          className="bg-[#0A2640] text-white pt-16 relative px-5 lg:px-0"
          id="hero"
        >
          {/* <div className="absolute bg-[#1C3D5B] h-[1293px] w-[1293px] rounded-full -right-[640px] -top-[900px]"></div> */}
          <div className="flex justify-between items-center max-w-7xl mx-auto mb-14">
            <div className="w-full md:w-1/2 flex flex-col">
              <h1 className="text-3xl md:text-5xl mb-4 leading-snug w-full md:w-[557px]">
                Save time by building fast with Boldo Template
              </h1>
              <p className="text-base text-[#F1F1F1] mb-10 w-full md:w-[567px]">
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </p>
              <div className="flex space-x-6 items-center">
                <button className="py-3 md:py-4 px-6 md:px-14 bg-[#69E6A6] text-base md:text-xl font-bold text-[#0A2640] rounded-full">
                  Buy template
                </button>
                <button className="py-3 md:py-4 px-6 md:px-14 text-base md:text-xl font-bold border-2 border-white rounded-full">
                  Explore
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img src="/hero-img.svg" />
            </div>
          </div>

          <div className="max-w-7xl mx-auto pb-16">
            <Marquee
              gradient
              autoFill
              gradientColor="#0A2640"
              gradientWidth={300}
            >
              <div className="mx-6">
                <img src="/client-1.png" />
              </div>
              <div className="mx-6">
                <img src="/client-2.png" />
              </div>
            </Marquee>
          </div>
        </section>

        <section className="pt-[84px] px-5 lg:px-0" id="services">
          <div className="flex flex-col justify-center items-center text-center mb-[78px]">
            <p className="text-xl text-[#777777] mb-3">Our Services</p>
            <h2 className="text-xl md:text-5xl w-full md:w-[850px] leading-snug">
              Handshake infographic mass market crowdfunding iteration.
            </h2>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-x-24 gap-y-16">
            {CardServiceData.map(({ img, service, desc, link }) => (
              <ServiceCard
                img={img}
                service={service}
                desc={desc}
                link={link}
              />
            ))}
          </div>
        </section>

        <section
          className="pt-[185px] max-w-6xl mx-auto flex justify-between items-center px-5 lg:px-0"
          id="connect"
        >
          <div className="hidden md:flex w-1/2">
            <img src="/connect-img.png" />
          </div>

          <div className="flex flex-col justify-end">
            <h3 className="w-full md:w-[493px] text-3xl md:text-4xl mb-10 leading-snug">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h3>
            <div className="flex flex-col space-y-6 mb-14">
              <div className="flex items-center space-x-4">
                <svg
                  clipRule="evenodd"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 md:w-9 h-9"
                  fill="#0A2640"
                >
                  <path
                    d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm-5.049 10.386 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z"
                    fillRule="nonzero"
                  />
                </svg>
                <p className="text-lg md:text-xl">
                  We connect our customers with the best.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  clipRule="evenodd"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 md:w-9 h-9"
                  fill="#0A2640"
                >
                  <path
                    d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm-5.049 10.386 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z"
                    fillRule="nonzero"
                  />
                </svg>
                <p className="text-lg md:text-xl">
                  Advisor success customer launch party.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  clipRule="evenodd"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 md:w-9 h-9"
                  fill="#0A2640"
                >
                  <path
                    d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm-5.049 10.386 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z"
                    fillRule="nonzero"
                  />
                </svg>
                <p className="text-lg md:text-xl">
                  Business-to-consumer long tail.
                </p>
              </div>
            </div>
            <button className="py-3 md:py-4 px-8 md:px-14 rounded-full bg-[#0A2640] font-bold text-lg md:text-xl text-white w-3/4 md:w-1/2">
              Start now
            </button>
          </div>
        </section>

        <section className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mt-32 pb-[120px] px-5 lg:px-0">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:ext-4xl w-full md:w-[493px] leading-tight mb-16">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>

            <div className="flex">
              <ul className="w-full md:w-[500px] flex flex-col space-y-2">
                {tabs.map((tab) => (
                  <li
                    key={tab}
                    className={`font-semibold text-base p-4 border rounded-xl cursor-pointer ${
                      activeTab === tab ? 'bg-[#0A2640] text-white' : ''
                    }`}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="">
            <div className="mt-8 flex space-x-3">
              {/* Tab content */}
              <div className="w-full">
                {tabInfo.map((tab) => (
                  <div
                    key={tab.id}
                    id={tab.id}
                    className={`${activeTab === tab.id ? '' : 'hidden'}`}
                  >
                    <img src={tab.content} className="w-[444px]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-[#0A2640] py-24 mb-32 px-5 lg:px-0"
          id="testimonial"
        >
          <div className="max-w-7xl mx-auto">
            <SliderTestimonial show={1}>
              <div className="grid md:grid-cols-3">
                {CardTestiData.map((item) => (
                  <SwiperSlide>
                    <CardTestimonial
                      key={item.id}
                      title={item.title}
                      name={item.name}
                      role={item.role}
                    />
                  </SwiperSlide>
                ))}
              </div>
            </SliderTestimonial>
          </div>
        </section>

        <section className="max-w-7xl mx-auto pb-20 px-5 lg:px-0">
          <img src="/img-banner.png" className="w-full mb-14" />

          <div className="flex flex-col md:flex-row justify-between items-start mb-40">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl w-full md:w-[500px] leading-relaxed">
                We connect our customers with the best, and help them keep
                up-and stay open.
              </h2>
            </div>

            <div className="w-full md:w-1/2">
              <Accordion />
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto pb-32 px-5 lg:px-0">
          <div className="flex flex-col justify-center items-center text-center w-full md:w-[842px] mx-auto mb-20">
            <h3 className="text-lg md:text-xl text-[#777777] mb-3">Our Blog</h3>
            <h2 className="text-3xl md:text-5xl leading-snug">
              Value proposition accelerator product management venture
            </h2>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-12 mb-20">
            {CardBlogData.slice(0, 3).map(
              ({ pic, category, date, content, author, photo, id }) => (
                <BlogCard
                  key={id}
                  pic={pic}
                  category={category}
                  date={date}
                  content={content}
                  author={author}
                  photo={photo}
                />
              )
            )}
          </div>

          <div className="flex items-center justify-center">
            <button className="py-4 px-14 rounded-full border-2 border-black font-bold hover:text-white hover:bg-black">
              Load more
            </button>
          </div>
        </section>

        <Subscribe />

        <section className="my-24 max-w-[1100px] mx-auto">
          {/* <div className="grid md:grid-cols-3 grid-flow-row gap-6">
            <div className="">
              <img src="/about-img-1.png" />
            </div>
            <div className="row-span-2">
              <img src="/about-img-1.png" className="h-full object-cover" />
            </div>
            <div className="">
              <img src="/about-img-1.png" />
            </div>
            <div className="">
              <img src="/about-img-1.png" />
            </div>
            <div className="">
              <img src="/about-img-1.png" />
            </div>
          </div> */}

          <div class="grid grid-cols-3 grid-rows-2 gap-8">
            <div class="col-span-1 row-span-1">
              <img
                src="/about-img-3.png"
                alt="Foto 2"
                class="w-full h-[330px] object-cover rounded-3xl"
              />
            </div>

            <div class="col-span-1 row-span-2 rounded-2xl overflow-hidden">
              <img
                src="/about-img-2.png"
                alt="Foto 1"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="col-span-1 row-span-1">
              <img
                src="/about-img-3.png"
                alt="Foto 3"
                class="w-full h-[330px] object-cover rounded-3xl"
              />
            </div>

            <div class="col-span-1 row-span-2 overflow-hidden">
              <img
                src="/about-img-3.png"
                alt="Foto 4"
                class="w-full h-[330px] object-cover rounded-3xl"
              />
            </div>

            <div class="col-span-1 row-span-1 overflow-hidden">
              <img
                src="/about-img-3.png"
                alt="Foto 5"
                class="w-full h-[330px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
