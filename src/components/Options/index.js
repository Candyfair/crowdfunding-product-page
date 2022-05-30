import PropTypes from 'prop-types';

import './style.scss';

const Options = ({
  id, title, pledge, description, qty,
}) => (
  <article key={id} className="option">

    <div className="option__pledge">
      <h3 className="option__pledge__title">{title}</h3>
      <p className="option__pledge__amount">Pledge ${pledge} or more</p>
    </div>

    <p className="option__pledge__description">{description}</p>

    <div className="option__count">
      <div className="option__count__quantity">
        <span className="option__count__quantity__left">{qty}</span> <span>left</span>
      </div>
      <br />
      <button className="content__button option__select" type="submit">Select Reward</button>
    </div>

  </article>
);

// PropTypes
Options.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  pledge: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
};

export default Options;
