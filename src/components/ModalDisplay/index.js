import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/actions/modals';

import './style.scss';

import BackProject from './BackProject';
import ThankYou from './ThankYou';
import MobileMenu from './MobileMenu';

const ModalDisplay = ({ pledges }) => {
  const { modal, element } = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  if (!modal) return null;

  return (
    <div
      open={modal}
      onClose={() => dispatch(setModal(false, 'none'))}
    >

      <section
        className={`modal${element === 'mobilemenu' ? ' mobilemenu-background' : ''}`}
        onClick={() => dispatch(setModal(false, 'none'))}
      >
        <div
          className={`modal__wrapper${element === 'thankyou' ? ' thankyou' : ''}${element === 'mobilemenu' ? ' mobilemenu' : ''}`}
          onClick={(e) => e.stopPropagation()} /* Prevents closure when clicking inside the wrapper */
        >
          <BackProject pledges={pledges} />
          <ThankYou />
          <MobileMenu />
        </div>
      </section>

    </div>
  );
};

ModalDisplay.propTypes = {
  pledges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      pledge: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      qty: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ModalDisplay;
