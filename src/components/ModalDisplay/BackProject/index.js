import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
import close from 'src/assets/images/icon-close-modal.svg';

import Pledge from './Pledge';
import { setModal } from '../../../redux/actions/modals';

const BackProject = ({ pledges }) => {
  const { element } = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  if (element !== 'pledge') return null;

  return (
    <section className="pledge">
      <div className="pledge__header">
        <h1 className="pledge__header__title">Back this project</h1>
        <img src={close} alt="Close button" onClick={() => dispatch(setModal(false, 'none'))} />
      </div>
      <p className="pledge__description">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

      {
        pledges.map((pledgeObj) => (
          <>
            <Pledge
              key={pledgeObj.id}
              {...pledgeObj}
            />
          </>
        ))
      }

    </section>
  );
};

BackProject.propTypes = {
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

export default BackProject;
