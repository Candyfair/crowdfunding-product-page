import './style.scss';

import menu from '../../assets/images/icon-hamburger.svg';

const Navigation = () => (
  <section className="menu">

    {/* Mobile menu */}
    <nav className="menu__mobile mobile">
      <img src={menu} alt="Menu icon" />
    </nav>

    {/* Desktop menu */}
    <nav className="menu__desktop desktop">
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Discover</a></li>
        <li><a href="#">Get Started</a></li>
      </ul>
    </nav>
  </section>
);

export default Navigation;
