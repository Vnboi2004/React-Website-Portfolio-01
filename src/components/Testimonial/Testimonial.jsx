import React from 'react';
import './Testimonial.css';
import Image1 from '../../assets/images/avatar-1.svg';
import Image2 from '../../assets/images/avatar-2.svg';
import Image3 from '../../assets/images/avatar-3.svg';
import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: Image1,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Clients & Reviews</h2>
      <Swiper className="testimonials__container grid"
       modules={[Pagination]}
       loop={true}
       grabCursor={true}
       spaceBetween={30}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        {data.map((item, id) => (
          <SwiperSlide className="testimonials__item" key={id}>
            <div className="thumb">
              <img src={item.image} alt="" />
            </div>
            <h3 className="testimonials__title">{item.title}</h3>
            <span className="subtitle">{item.subtitle}</span>
            <div className="comment">{item.comment}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonial
