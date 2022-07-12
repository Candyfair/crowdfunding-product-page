import { useDispatch, useSelector } from 'react-redux';

import './style.scss';
import menu from '../../assets/images/icon-hamburger.svg';
import closemenu from '../../assets/images/icon-close-menu.svg';
import { setModal } from '../../redux/actions/modals';

const Navigation = () => {
  const { element } = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  const openMobileMenu = () => {
    dispatch(setModal(true, 'mobilemenu'));
  };

  const closeMobileMenu = () => {
    dispatch(setModal(false, 'none'));
  };

  return (
    <section className="menu">

      {/* Mobile menu */}
      <nav className="menu__mobile mobile">
        <img
          src={element !== 'mobilemenu' ? menu : closemenu}
          alt="Menu icon"
          className={`${element === 'mobilemenu' ? 'close' : ''}`}
          onClick={element !== 'mobilemenu' ? openMobileMenu : closeMobileMenu}
        />
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
}

export default Navigation;
