import { useSelector } from 'react-redux';

import './style.scss';

const Pledge = () => {
  const { element } = useSelector((state) => state.modals);

  if (element !== 'pledge') return null;

  return (
    <div>
      Pledge Modal
    </div>
  );
};

export default Pledge;
