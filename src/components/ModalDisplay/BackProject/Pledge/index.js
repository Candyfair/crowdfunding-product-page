import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setPledge } from '../../../../redux/actions/pledge';

import './style.scss';

const Pledge = ({
  id, title, pledge, description, qty,
}) => {
  const dispatch = useDispatch();

  // Get pledge amount
  const { amount } = useSelector((state) => state.pledge);
  console.log('amount:', amount);

  const handlePledge = () => {
    dispatch(setPledge(pledge));
  };

  return (
    <article key={id} className={`pledge__wrapping${qty === 0 ? ' inactive' : ''}${amount === pledge ? ' checked' : ''}`}>

      <div className="pledge__reward">
        <input
          type="radio"
          className="pledge__reward__radio-button"
          name="pledge"
          id={id}
          disabled={qty === 0}
          onChange={handlePledge}
        />
        <div>
          <h2 className="pledge__reward__pledge-title">{title}</h2>
          <p className="pledge__reward__pledge-subtitle">Pledge ${pledge} or more</p>
        </div>
      </div>

      <p className="pledge__description">{description}</p>

      <div>
        <div>
          <span className="pledge__reward__qty">{qty}</span> <span>left</span>
        </div>
        <br />
      </div>

    </article>
  );
}

// PropTypes
Pledge.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  pledge: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
};

export default Pledge;
