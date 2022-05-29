import './style.scss';

import Navigation from 'src/components/Navigation';

// Import images
import logo from '../../assets/images/logo.svg';
import imgMobile from '../../assets/images/image-hero-mobile.jpg';

const Header = () => (
  <section className="header">
    <div className="header__image">
      <img src={imgMobile} alt="Mastercraft Bamboo Monitor Riser" />
    </div>

    <div className="header__logo">
      <img src={logo} alt="Crowdfund logo" />
    </div>

    <div className="header__menu">
      <Navigation />
    </div>
  </section>
);

export default Header;
