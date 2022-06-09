import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/actions/modals';

import './style.scss';

import Pledge from './Pledge';
import ThankYou from './ThankYou';

const ModalDisplay = () => {
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
        <div className="modal__wrapper" onClick={(e) => e.stopPropagation()}> {/* Prevents closure when clicking in the wrapper */}
          <Pledge />
          <ThankYou />
        </div>
      </section>

    </div>
  );
};

export default ModalDisplay;
