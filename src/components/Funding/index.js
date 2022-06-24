import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { currencyFormat, numberFormat, daysLeft } from '../../utils/utils';

import './style.scss';

const Funding = ({ target, date }) => {
  // Get backed amount and number of backers from state
  const { backed, backers } = useSelector((state) => state.counters);
  const backedAmount = currencyFormat(backed);
  const totalBackers = numberFormat(backers);

  // Target amount
  const total = currencyFormat(target);

  // Number of days left
  const days = daysLeft(date);

  // Tracking gauge calculation
  let gauge;
  if (backed < target) {
    gauge = 100 * backed / target;
  }
  else {
    gauge = 100;
  }

  return (
    <section className="content__wrapper funding">
      <div className="funding__details">
        <div className="funding__details__texts">
          <div>
            <div className="funding__details__numbers">{backedAmount}</div>
            <div className="funding__details__desc">of {total} backed</div>
          </div>

          <div className="funding__details__line"></div>
        </div>

        <div className="funding__details__texts">
          <div>
            <div className="funding__details__numbers">{totalBackers}</div>
            <div className="funding__details__desc">total backers</div>
          </div>
          <div className="funding__details__line"></div>
        </div>

        <div className="funding__details__texts">
          <div>
            <div className="funding__details__numbers">{days}</div>
            <div className="funding__details__desc">days left</div>
          </div>
        </div>
      </div>

      {/* Backing tracking gauge line */}
      <div className="funding__tracker">
        <span className="funding__tracker__backed" style={{ width: `${gauge}%` }}></span>
      </div>
    </section>
  );
}

Funding.propTypes = {
  target: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default Funding;
