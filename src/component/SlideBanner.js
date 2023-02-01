import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation, EffectFade } from "swiper"
import {Link} from "react-router-dom";

import "swiper/css";



function SlideBanner(props) {

  let swiperdb = [
    {
      title : ["큰글자", "작은설명"],
      cls : ["ec", "mallbg"],
      href : "#",
      bg : "red"
    },
    {
      title : ["단기제작", "얼마나 걸렸는지"],
      cls : ["ec", "mallbg"],
      href : "#",
      bg : "orange"
    },
    {
      title : ["자랑하기", "자랑자랑잘ㅇ잘한다잫암ㅇㄹ"],
      cls : ["ec", "mallbg"],
      href : "#",
      bg : "yellow"
    },
    {
      title : ["H2 태그로", "여기는 피태그야에"],
      cls : ["ec", "mallbg"],
      href : "#",
      bg : "green"
    },
    {
      title : ["큰글자", "P태그로처리"],
      cls : ["ec", "mallbg"],
      href : "#",
      bg : "blue"
    },
    {
      title : ["무한굴레", "계속돌아가야해애애애애애"],
      cls : ["ec", "mallbg"],
      href : "#",
      bg : "navy"
    },
    {
      title : ["리액트", "스와이퍼를 굴려라"],
      cls : ["ec", "mallbg"],
      href : "#",
      bg : "purple"
    }

  ]


  return (
    <Swiper
    spaceBetween={0}
    slidesPerView={"auto"}
    centeredSlides={true}
    loop={true}
    effect={"fade"}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    navigation={true}
    modules={[Autoplay, Navigation, EffectFade]}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    >
      {
        swiperdb.map ((item, idx) => {
          const swcls = item.cls.join(" ")
          return (
          <SwiperSlide className={swcls} style={{height:600, width:100, backgroundColor : item.bg}}>
           <Link to={item.href} className='d-flex flex-column align-items-center justify-content-center h-100'>
            <div>
              <h2 className='align-items-center text-white'>{item.title[0]}</h2>
              <p className='text-white'>{item.title[1]}</p>
            </div>
           </Link>
          </SwiperSlide>
          )
        })
      }
        </Swiper>
    );
}

export default SlideBanner;