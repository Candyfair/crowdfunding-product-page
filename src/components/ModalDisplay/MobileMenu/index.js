import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../../redux/actions/modals';

import './style.scss';

const MobileMenu = () => {
  const { element } = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  if (element !== 'mobilemenu') return null;

  return (
    <div className="menu-mobile">
      <nav>
        <ul className="menu-mobile__links">
          <li><a href="#" className="menu-mobile__link">About</a></li>
          <li><a href="#" className="menu-mobile__link">Discover</a></li>
          <li><a href="#" className="menu-mobile__link">Get Started</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
