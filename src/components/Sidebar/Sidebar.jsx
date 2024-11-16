import React from 'react';
import './Sidebar.css';


import Logo from '../../assets/images/logo.svg';

const sidebar = () => {
  return (
    <>
      <aside className="aside">
        {/* Build logo */}
        <a href="#home" className='nav__logo'>
          <img src={Logo} alt="" />
        </a>

        {/* Build nav link */}
        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i class="ri-home-line"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i class="ri-user-line"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i class="ri-briefcase-line"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  <i class="ri-graduation-cap-line"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i class="ri-stack-line"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#blog" className="nav__link">
                  <i class="ri-edit-box-line"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i class="ri-chat-3-line"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Build footer */}
        <div className="nav__footer">
          <span className="copyright">&copy; 2022 - 2023.</span>
        </div>
      </aside>

      <div className="nav__toggle">
        <i class="ri-menu-line"></i>
      </div>
    </>
  )
}

export default sidebar
