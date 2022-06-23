import { useSelector } from 'react-redux';

import './style.scss';

const ThankYou = () => {
  const { element } = useSelector((state) => state.modals);
  const { amount } = useSelector((state) => state.pledge);

  if (element !== 'thankyou') return null;

  return (
    <div>
      <h1>Thank You!</h1>
      <p>Amount passed: {amount}</p>
    </div>
  );
};

export default ThankYou;
