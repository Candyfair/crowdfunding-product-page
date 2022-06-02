import './style.scss';

import bookmark from '../../assets/images/icon-bookmark.svg';

const Bookmark = () => (
  <div className="intro__buttons">
    <button type="button" className="content__button intro__buttons__button">Back this project</button>

    {/* Mobile */}
    <div className="intro__buttons__bookmark mobile">
      <img src={bookmark} alt="Bookmark button" />
    </div>

    {/* Desktop */}
    <div className="intro__buttons__bookmark-desktop desktop">
      <img src={bookmark} className="intro__buttons__bookmark__img" alt="Bookmark button" />
      <span className="intro__buttons__bookmark__text">Bookmark</span>
    </div>

  </div>
);

export default Bookmark;
