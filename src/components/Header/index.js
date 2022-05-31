import './style.scss';

import Navigation from 'src/components/Navigation';

// Import images
import logo from '../../assets/images/logo.svg';
import imgMobile from '../../assets/images/image-hero-mobile.jpg';
import imgDesktop from '../../assets/images/image-hero-desktop.jpg';

const Header = () => (
  <section className="header">
    <div className="header__image">
      <img src={imgMobile} alt="Mastercraft Bamboo Monitor Riser" className="mobile" />
      <img src={imgDesktop} alt="Mastercraft Bamboo Monitor Riser" className="desktop" />
    </div>

    <div className="header__elements">
      <div className="header__elements__logo">
        <img src={logo} alt="Crowdfund logo" />
      </div>

      <div className="header__elements__menu">
        <Navigation />
      </div>

    </div>
  </section>
);

export default Header;
