import './style.scss';

const Funding = () => (
  <section className="content__wrapper funding">
    <div className="funding__details">
      <div className="funding__details__texts">
        <div>
          <div className="funding__details__numbers">$89,914</div>
          <div className="funding__details__desc">of $100,000 backed</div>
        </div>

        <div className="funding__details__line"></div>
      </div>

      <div className="funding__details__texts">
        <div>
          <div className="funding__details__numbers">5,007</div>
          <div className="funding__details__desc">total backers</div>
        </div>
        <div className="funding__details__line"></div>
      </div>

      <div className="funding__details__texts">
        <div>
          <div className="funding__details__numbers">56</div>
          <div className="funding__details__desc">days left</div>
        </div>
      </div>
    </div>

    <div className="funding__tracker">
      <span className="funding__tracker__backed"></span>
    </div>
  </section>
);

export default Funding;
