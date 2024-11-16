import React from 'react';
import './Service.css';
import Service1 from '../../assets/images/service-1.svg';
import Service2 from '../../assets/images/service-2.svg';
import Service3 from '../../assets/images/service-3.svg';

const data = [
  {
    id: 1,
    image: Service1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Service2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Service3,
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
];

const Service = () => {
  return (
   <section className="services container section" id='services'>
    <h2 className="section__title">Services</h2>
    <div className="services__container grid">
      {data.map((item, key) => (
          <div className="services__card" key={key}>
            <img src={item.image} alt="" className="services__img" />
            <h3 className="services__title">{item.title}</h3>
            <p className="services__description">{item.description}</p>
          </div>
      ))}
    </div>
   </section>
  )
}

export default Service
