import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../../redux/actions/modals';

import './style.scss';
import check from '../../../assets/images/icon-check.svg';

const ThankYou = () => {
  const { element } = useSelector((state) => state.modals);

  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setModal(false, ''));
  };

  if (element !== 'thankyou') return null;

  return (
    <div className="confirmation">
      <div className="confirmation__img-wrapper">
        <img src={check} alt="Check" className="confirmation__img" />
      </div>
      <h1 className="confirmation__title">Thanks for your support!</h1>
      <p className="confirmation__text">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>

      <button
        className="content__button confirmation__button"
        type="button"
        onClick={closeModal}
      >
        Got it!
      </button>

    </div>
  );
};

export default ThankYou;
