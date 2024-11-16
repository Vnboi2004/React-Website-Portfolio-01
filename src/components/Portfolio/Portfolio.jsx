import React, { useState } from 'react';
import './Portfolio.css';
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  // Hàm lọc các mục theo danh mục
  const filterItem = (category) => {
    if (category === "Everything") {
      setItems(Menu);
    } else {
      const updatedItems = Menu.filter((item) => item.category === category);
      setItems(updatedItems);
    }
  };

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">My Portfolio</h2>

      {/* Bộ lọc danh mục */}
      <div className="work__filters">
        <span className="work__item" onClick={() => filterItem("Everything")}>Everything</span>
        <span className="work__item" onClick={() => filterItem("Creative")}>Creative</span>
        <span className="work__item" onClick={() => filterItem("Art")}>Art</span>
        <span className="work__item" onClick={() => filterItem("Design")}>Design</span>
        <span className="work__item" onClick={() => filterItem("Branding")}>Branding</span>
      </div>

      {/* Hiển thị các mục công việc */}
      <div className="work__container grid">
        {items.map((item) => (
          <div className="work__card" key={item.id}>
            <div className="work__thumbnail">
              <img src={item.image} alt={item.title} className="work__img" />
              <div className="work__mask"></div>
            </div>
            <span className="work__category">{item.category}</span>
            <h3 className="work__title">{item.title}</h3>
            <a href={item.link} className="work__button">
              <i className="ri-links-line work__button-icon"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
