import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/actions/modals';

import './style.scss';

import BackProject from './BackProject';
import ThankYou from './ThankYou';

const ModalDisplay = ({ pledges }) => {
  const { modal } = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  if (!modal) return null;

  return (
    <div
      open={modal}
      onClose={() => dispatch(setModal(false, 'none'))}
    >

      <section
        className="modal"
        onClick={() => dispatch(setModal(false, 'none'))}
      >
        <div className="modal__wrapper" onClick={(e) => e.stopPropagation()}> {/* Prevents closure when clicking inside the wrapper */}
          <BackProject pledges={pledges} />
          <ThankYou />
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
