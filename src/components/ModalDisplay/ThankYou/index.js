import { useSelector } from 'react-redux';

import './style.scss';
import check from '../../../assets/images/icon-check.svg';

const ThankYou = () => {
  const { element } = useSelector((state) => state.modals);
  const { amount } = useSelector((state) => state.pledge);

  if (element !== 'thankyou') return null;

  return (
    <div>
      <div>
        <img src={check} alt="Check" />
      </div>
      <h1>Thank You!</h1>
      <p>Amount passed: {amount}</p>
    </div>
  );
};

export default ThankYou;
