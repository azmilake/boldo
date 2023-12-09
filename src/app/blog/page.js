'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'
import CardBlogData from '../utils/cardblogdata.json'
import BlogCard from '../components/BlogCard'

export default function page() {
  return (
    <>
      <Navbar background="white" />

      <main>
        <section className="w-full md:w-[890px] mx-auto flex flex-col items-center justify-center mt-11 mb-10 px-5 md:px-0">
          <h4 className="text-lg md:text-xl mb-3 md:mb-2">Blog</h4>
          <h2 className="text-4xl md:text-[64px] mb-8 md:mb-10">
            Thoughts and words
          </h2>
        </section>

        <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-b border-black pb-[72px] px-5 md:px-0">
          <div className="rounded-3xl overflow-hidden w-full md:w-1/2 mb-4 md:mb-0">
            <img src="/blog-header-img.png" />
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <div className="flex items-center space-x-3 mb-3">
              <h4 className="text-base font-bold">Category</h4>
              <p className="text-base text-[#777777]">November 22, 2021</p>
            </div>
            <h1 className="text-3xl md:text-5xl md:leading-snug mb-5">
              Pitch termsheet backing validation focus release.
            </h1>
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-gray-400"></div>
              <h4 className="text-base">Chandler Bing</h4>
            </div>
          </div>
        </section>

        <section className="mt-24 max-w-5xl mx-auto px-5 lg:px-0">
          <h2 className="text-5xl mb-10">Latest news</h2>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-12 mb-24">
            {CardBlogData.map(
              ({ pic, category, date, content, author, photo, id }) => (
                <BlogCard
                  id={id}
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

          <div className="flex justify-center items-center">
            <button className="py-4 px-14 rounded-full border-2 border-black font-bold text-xl mb-28 hover:bg-[#0A2640] hover:text-white">
              Load more
            </button>
          </div>
        </section>
      </main>

      <Subscribe />
      <Footer />
    </>
  )
}
