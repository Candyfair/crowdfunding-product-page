import { useSelector } from 'react-redux';

import './style.scss';

const ThankYou = () => {
  const { element } = useSelector((state) => state.modals);

  if (element !== 'thankyou') return null;

  return (
    <div>
      ThankYou Modal
    </div>
  );
};

export default ThankYou;
