import './style.scss';

import menu from '../../assets/images/icon-hamburger.svg';

const Navigation = () => (
  <section className="menu">
    <div className="menu-mobile">
      <img src={menu} alt="Menu icon" />
    </div>
  </section>
);

export default Navigation;
