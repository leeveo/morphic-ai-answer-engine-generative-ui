import React from 'react'
import Slider from 'react-slick'
import HistoryContainer from './history-container'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export async function Sidebar() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  }

  return (
    <div className="h-screen p-2 fixed top-0 left-0 flex-col justify-center pb-24 hidden sm:flex" style={{ width: '250px' }}>
      <Slider {...settings} className="w-full h-full">
        <div>
          <img src="/images/anne001.png" alt="Anne 1" className="w-full h-48 object-cover" />
        </div>
        <div>
          <img src="/images/anne001.png" alt="Anne 2" className="w-full h-48 object-cover" />
        </div>
        <div>
          <img src="/images/anne001.png" alt="Anne 3" className="w-full h-48 object-cover" />
        </div>
      </Slider>
      <HistoryContainer location="sidebar" />
    </div>
  )
}