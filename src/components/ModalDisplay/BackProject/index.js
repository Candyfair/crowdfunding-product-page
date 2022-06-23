import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';

import Pledge from './Pledge';
import { setModal } from '../../../redux/actions/modals';
import { setChecked, setPledge, showErrorMessage } from '../../../redux/actions/pledge';

const BackProject = ({ pledges }) => {
  const dispatch = useDispatch();

  // Modal status
  const { element } = useSelector((state) => state.modals);

  // Show error message if pledge is empty
  const displayErrorMessage = () => {
    dispatch(showErrorMessage(true));
  };

  const hideErrorMessage = () => {
    dispatch(showErrorMessage(false));
  };

  // Get pledge amount
  const { checked, amount, error } = useSelector((state) => state.pledge);
  console.log(`checked: ${checked}, amount: ${amount}, error: ${error}`);

  const handleChecked = () => {
    dispatch(setChecked('noreward')); // Keep the option selected
  };

  const handlePledge = (e) => {
    dispatch(setPledge(e.target.value));
    handleChecked();
    hideErrorMessage();
  };

  // Open Thank you modal and pass amount
  const openModalThankYou = () => {
    if (amount === '') return displayErrorMessage();

    dispatch(setModal(true, 'thankyou'));
  };

  // Check pledge amount
  const checkAmount = () => {
    if (amount === 'on') {
      displayErrorMessage();
    }
    else if (amount < 1) {
      displayErrorMessage();
    }
    else {
      openModalThankYou();
    }
  };

  // Show or hide modal
  if (element !== 'pledge') return null;

  return (
    <section className="pledge">
      <div className="pledge__header">
        <h1 className="pledge__header__title">Back this project</h1>

        {/* Close button */}
        <div className="pledge__header__close" onClick={() => dispatch(setModal(false, 'none'))}>
          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fillRule="evenodd" opacity=".4" className="pledge__header__close__svg" /></svg>
        </div>
      </div>
      <p className="pledge__description">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

      <form action="">
        {/* Pledge with no reward */}
        <article className={`pledge__wrapping${checked === 'noreward' ? ' checked' : ''}`}>

          <div className="pledge__reward">
            <input
              type="radio"
              className="pledge__reward__radio-button"
              name="pledge"
              id="noreward"
              checked={checked === 'noreward'}
              onChange={handlePledge}
            />
            <label htmlFor="noreward" className="pledge__reward__pledge-title">Pledge with no reward</label>
          </div>

          <p className="pledge__reward__text">Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>

          {/* Hidden form */}
          <div className={`pledge__details${checked === 'noreward' ? ' show' : ''}`}>
            <p className="pledge__details__title">Enter your pledge</p>

            <div className="pledge__details__enter">
              <span className="input-symbol-dollar">
                <input
                  className="pledge__details__enter__input"
                  type="text"
                  name="pledged"
                  id="pledged"
                  onChange={handlePledge}
                />
              </span>

              <button
                className="content__button pledge__button"
                type="button"
                onClick={checkAmount}
              >
                Continue
              </button>
            </div>

            {/* Error message if pledge is emply */}
            {
              error && <span className="error">Please enter a pledge amount</span>
            }

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
