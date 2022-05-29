import PropTypes from 'prop-types';

import './style.scss';

const Options = ({
  id, title, pledge, description, qty,
}) => (

  <article key={id} className="option">
    <h3 className="option__title">{title}</h3>
    <span className="option__pledge">Pledge ${pledge} or more</span>
    <p>{description}</p>
    <span>{qty}</span> <span>left</span>
    <button type="submit">Select Reward</button>
  </article>
);

Options.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  pledge: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
};

export default Options;
