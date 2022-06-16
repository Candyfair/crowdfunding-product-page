import PropTypes from 'prop-types';
import './style.scss';

const Pledge = ({
  id, title, pledge, description, qty,
}) => (
  <article key={id}>

    <div>
      <h3>{title}</h3>
      <p>Pledge ${pledge} or more</p>
    </div>

    <p>{description}</p>

    <div>
      <div>
        <span>{qty}</span> <span>left</span>
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
