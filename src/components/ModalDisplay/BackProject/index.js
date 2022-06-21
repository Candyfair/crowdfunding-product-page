import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
import close from 'src/assets/images/icon-close-modal.svg';

import Pledge from './Pledge';
import { setModal } from '../../../redux/actions/modals';
import { setPledge } from '../../../redux/actions/pledge';

const BackProject = ({ pledges }) => {
  const dispatch = useDispatch();

  // Modal status
  const { element } = useSelector((state) => state.modals);

  // Get pledge amount
  const { amount } = useSelector((state) => state.pledge);
  console.log('amount:', amount);

  const handlePledge = (e) => {
    dispatch(setPledge(e.target.value));
  };

  // Show or hide modal
  if (element !== 'pledge') return null;

  return (
    <section className="pledge">
      <div className="pledge__header">
        <h1 className="pledge__header__title">Back this project</h1>
        <img src={close} alt="Close button" onClick={() => dispatch(setModal(false, 'none'))} />
      </div>
      <p className="pledge__description">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

      <form action="">
        {/* Pledge with no reward */}
        <article className={`pledge__wrapping${amount === 'noreward' ? ' checked' : ''}`}>

          <div className="pledge__reward">
            <input
              type="radio"
              className="pledge__reward__radio-button"
              name="pledge"
              id="noreward"
              value="noreward"
              checked={amount === 'noreward'}
              onChange={handlePledge}

            />
            <h2 className="pledge__reward__pledge-title">Pledge with no reward</h2>
          </div>

          <p className="pledge__description">Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>

          {/* Hidden form */}
          <div className="pledge__details">
            <p className="pledge__details__title">Enter your pledge</p>

            <div className="pledge__details__enter">
              <span className="input-symbol-dollar">
                <input className="pledge__details__enter__input" type="text" name="pledged" id="pledged" />
              </span>

              <button className="content__button pledge__button" type="submit">Continue</button>
            </div>

          </div>

        </article>

        {/* Other pledges */}
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

      </form>

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
