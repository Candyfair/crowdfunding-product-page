import './style.scss';

const Bookmark = () => (
  <div className="intro__buttons">
    <button type="button" className="content__button intro__buttons__button">Back this project</button>

    {/* Mobile */}
    <div className="intro__buttons__bookmark mobile">
      <span className="icon icon-bookmark"></span>
    </div>

    {/* Desktop */}
    <div className="intro__buttons__bookmark-desktop desktop">
      <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28" className="icon" /><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" /></g></svg>

      <span className="intro__buttons__bookmark__text">Bookmark</span>
    </div>

  </div>
);

export default Bookmark;
