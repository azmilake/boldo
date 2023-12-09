'use client'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Subscribe from '../components/Subscribe'
import ValuesData from '../utils/valuedata.json'
import Team from '../utils/teamdata.json'

export default function page() {
  return (
    <>
      <Navbar background="[#0A2640]" />

      <main>
        <section className="bg-[#0A2640] h-full pt-[70px] px-5 lg:px-0">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center text-white">
            <h5 className="mb-6 text-lg md:text-xl text-[#F1F1F1]">About</h5>
            <h1 className="text-2xl md:text-[64px] w-full md:w-[842px] mb-8 leading-snug">
              We love to make great things, things that matter.
            </h1>
            <p className="text-sm md:text-base text-[#f1f1f1] w-full md:w-[745px] pb-48">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
          </div>
        </section>

        <section className="max-w-[1100px] mx-auto -mt-[100px] mb-20 md:mb-32 px-5 lg:px-0">
          <div class="grid grid-cols-3 grid-rows-2 gap-8">
            <div class="col-span-1 row-span-1">
              <img
                src="/about-img-1.png"
                alt="Foto 2"
                class="w-full h-full md:h-[330px] object-cover rounded-3xl"
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
                class="w-full h-full md:h-[330px] object-cover rounded-3xl"
              />
            </div>

            <div class="col-span-1 row-span-2 overflow-hidden">
              <img
                src="/about-img-4.png"
                alt="Foto 4"
                class="w-full h-[90px] md:h-[330px] object-cover rounded-3xl"
              />
            </div>

            <div class="col-span-1 row-span-1 overflow-hidden">
              <img
                src="/about-img-5.png"
                alt="Foto 5"
                class="w-full h-full md:h-[330px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto flex flex-col mb-24 px-5 lg:px-0">
          <h3 className="mb-3 text-xl text-[#777777]">Our story</h3>
          <h2 className="text-2xl md:text-5xl mb-[30px] leading-snug">
            Handshake infographic mass market crowdfunding iteration.
          </h2>
          <p className="text-sm md:text-xl text-[#777777] w-full md:w-[800px] leading-relaxed">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
            Sales user experience branding growth hacking holy grail
            monetization conversion prototype stock network effects. Learning
            curve network effects return on investment bootstrapping
            business-to-consumer.{' '}
          </p>
        </section>

        <section className="bg-[#0A2640] py-24 text-white mb-24 px-5 lg:px-0">
          <div className="flex flex-col justify-center items-center text-center mb-20">
            <h4 className="mb-3 text-xl text-[#f1f1f1]">Our numbers</h4>
            <h2 className="text-2xl md:text-5xl w-full md:w-[840px] leading-snug">
              Handshake infographic mass market crowdfunding iteration.
            </h2>
          </div>

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-around space-y-14 md:space-y-0">
            <div className="flex flex-col space-y-4 md:space-y-8 md:text-star text-center">
              <h2 className="text-5xl md:text-8xl text-[#4FE9A4]">120m</h2>
              <h4 className="text-lg md:text-2xl text-[#f1f1f1]">
                Cool feature title
              </h4>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-8 md:text-star text-center">
              <h2 className="text-5xl md:text-8xl text-[#4FE9A4]">10.000</h2>
              <h4 className="text-lg md:text-2xl text-[#f1f1f1]">
                Cool feature title
              </h4>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-8 md:text-star text-center">
              <h2 className="text-5xl md:text-8xl text-[#4FE9A4]">240</h2>
              <h4 className="text-lg md:text-2xl text-[#f1f1f1]">
                Cool feature title
              </h4>
            </div>
          </div>
        </section>

        <section className="mb-32 px-5 lg:px-0">
          <div className="max-w-4xl mx-auto flex flex-col">
            <h3 className="mb-3 text-xl text-[#777777]">Our team</h3>
            <h2 className="text-2xl md:text-5xl mb-6 leading-snug">
              The leadership team
            </h2>
            <p className="text-sm md:text-xl text-[#777777] w-full md:w-[635px] leading-relaxed">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.
            </p>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col md:flex-row space-y-10 md:space-y-0 justify-between mt-12">
            {Team.map(({ img, name, position, id }) => (
              <div className="" key={id}>
                <img src={img} className="w-full bg-cover bg-center" />
                <div className="flex flex-col mt-6">
                  <h2 className="text-[28px] mb-3">{name}</h2>
                  <h4 className="text-xl text-[#777777]">{position}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0A2640] py-32 text-white mb-32 px-5 lg:px-0">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col mb-[72px]">
              <h5 className="text-xl mb-3">Our values</h5>
              <h2 className="text-2xl md:text-5xl mb-5">
                Things in we believe
              </h2>
              <h4 className="text-sm md:text-xl text-[#f1f1f1] w-full md:w-[780px]">
                Conversion angel investor entrepreneur first mover advantage.
                Handshake infographic mass market crowdfunding iteration.
                Traction stock user experience deployment beta innovator
                incubator focus.{' '}
              </h4>
            </div>

            <div className="flex flex-col space-y-16">
              {ValuesData.map(({ img, title, desc, id }) => (
                <div
                  className="flex flex-col md:flex-row space-x-0 md:space-x-12"
                  key={id}
                >
                  <img src={img} className="rounded-3xl object-center h-52" />
                  <div className="flex flex-col space-y-4">
                    <h2 className="text-xl md:text-[28px] mt-6">{title}</h2>
                    <p className="text-sm md:text-xl text-[#f1f1f1] w-full md:w-[600px]">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Subscribe />
      <Footer />
    </>
  )
}
