import PropTypes from 'prop-types';
import './style.scss';

const Pledge = ({
  id, title, pledge, description, qty,
}) => (
  <article key={id} className={`pledge__wrapping${qty === 0 ? ' inactive' : ''}`}>

    <div className="pledge__reward">
      <input
        type="radio"
        className="pledge__reward__radio-button"
        name="pledge"
        id={`pledge${id}`}
        disabled={qty === 0}
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

// PropTypes
Pledge.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  pledge: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
};

export default Pledge;
