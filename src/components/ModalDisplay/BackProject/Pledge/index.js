import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addBacker, addNewPledge } from '../../../../redux/actions/counters';
import { setModal } from '../../../../redux/actions/modals';
import { setChecked, setPledge, showErrorMessage } from '../../../../redux/actions/pledge';

import './style.scss';

const Pledge = ({
  id, title, pledge, description, qty,
}) => {
  const dispatch = useDispatch();

  // Show error message if pledge is empty
  const displayErrorMessage = () => {
    dispatch(showErrorMessage(true));
  };

  const hideErrorMessage = () => {
    dispatch(showErrorMessage(false));
  };

  // Get pledge amount and checked status
  const { amount, checked, error } = useSelector((state) => state.pledge);

  const handleChecked = () => {
    dispatch(setChecked(id));
  };

  const handlePledge = () => {
    dispatch(setPledge(pledge));
    handleChecked();
    hideErrorMessage();
  };

  // Controlled inputs
  const handleChange = (event) => {
    dispatch(setPledge(event.target.value));
    hideErrorMessage();
  };

  // Open Thank you modal and pass amount
  const openModalThankYou = () => {
    dispatch(addNewPledge(parseInt(amount, 10))); // Increase backed amount with new pledge
    dispatch(addBacker()); // Add +1 backer
    dispatch(setModal(true, 'thankyou')); // Open the modal
  };

  // Check pledge amount
  const checkAmount = () => {
    if (amount === '') {
      displayErrorMessage();
    }
    else if (amount < 1) {
      displayErrorMessage();
    }
    else {
      openModalThankYou();
    }
  };

  return (
    <article key={id} className={`pledge__wrapping${qty === 0 ? ' inactive' : ''}${checked === id ? ' checked' : ''}`}>

      <div className="pledge__reward">
        <input
          type="radio"
          className="pledge__reward__radio-button"
          name="pledge"
          id={id}
          disabled={qty === 0}
          onChange={handlePledge}
          checked={checked === id}
        />
        <div className="pledge__reward__header">
          <div className="pledge__reward__header__titles">
            <label htmlFor={id} className="pledge__reward__pledge-title">{title}</label>
            <p className={`pledge__reward__pledge-subtitle${checked === id ? ' pledge__reward__pledge-subtitle__checked' : ''}`}>Pledge ${pledge} or more</p>
          </div>

          {/* Quantity left (desktop) */}
          <div className="desktop">
            <span className="pledge__reward__qty">{qty}</span> <span>left</span>
          </div>

        </div>
      </div>

      <p className="pledge__reward__text">{description}</p>

      {/* Quantity left (mobile) */}
      <div className="mobile">
        <div>
          <span className="pledge__reward__qty">{qty}</span> <span>left</span>
        </div>
        <br />
      </div>

      {/* Hidden form */}
      <div className={`pledge__details${checked === id ? ' show' : ''}`}>
        <p className="pledge__details__title">Enter your pledge</p>

        <div className="pledge__details__enter">
          <span className="input-symbol-dollar">
            <input
              className="pledge__details__enter__input"
              type="text"
              name="pledged"
              id="pledged"
              value={amount}
              // Force the use of numbers in the field
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={handleChange}
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
  );
};

// PropTypes
Pledge.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  pledge: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
};

export default Pledge;
