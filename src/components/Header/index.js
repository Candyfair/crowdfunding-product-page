import { useSelector } from 'react-redux';

import Navigation from 'src/components/Navigation';

import './style.scss';
// Import images
import logo from '../../assets/images/logo.svg';

const Header = () => {
  const { element } = useSelector((state) => state.modals);

  return (
    <section className="header">

      <div className="header__elements">
        <div className="header__elements__logo">
          <img
            src={logo}
            alt="Crowdfund logo"
            className={element === 'mobilemenu' ? 'header__elements__logo-top' : ''}
          />
        </div>

        <div className="header__elements__menu">
          <Navigation />
        </div>

      </div>
    </section>
  );
}

export default Header;
