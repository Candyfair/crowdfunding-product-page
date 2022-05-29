import PropTypes from 'prop-types';

import './style.scss';

const Options = ({ id, title, pledge, description, qty }) => (
  <div>
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{pledge}</li>
      <li>{description}</li>
      <li>{qty}</li>
    </ul>
  </div>
);

Options.proTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  pledge: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
};

export default Options;
