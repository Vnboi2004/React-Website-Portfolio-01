import React from 'react';
import './Resume.css';
import Data from './Data';
import Card from './Card';

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>
      <div className="resume__container grid">
        {/* Education Timeline */}
        <div className="timeline grid">
          {Data.map((item, id) => 
            item.category === 'education' && (
              <Card 
                key={id} 
                icon={item.icon} 
                title={item.title}
                year={item.year} 
                desc={item.desc}  
              />
            )
          )}
        </div>

        {/* Experience Timeline */}
        <div className="timeline grid">
          {Data.map((item, id) => 
            item.category === 'experience' && (
              <Card 
                key={id} 
                icon={item.icon} 
                title={item.title}
                year={item.year} 
                desc={item.desc}  
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Resume;
