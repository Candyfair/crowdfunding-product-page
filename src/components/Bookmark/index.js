import { useDispatch, useSelector } from 'react-redux';
import { setBookmark } from '../../redux/actions/bookmark';
import { setModal } from '../../redux/actions/modals';
import { setPledge } from '../../redux/actions/pledge';

import './style.scss';

const Bookmark = () => {
  const { bookmark } = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();

  // Add and remove from bookmarks
  const handleBookmarkChange = () => {
    dispatch(setBookmark(!bookmark));
  };

  // Open the Pledge modal with no option selected
  const openModalNoOption = () => {
    dispatch(setPledge(''));
    dispatch(setModal(true, 'pledge'));
  };

  return (
    <div className="intro__buttons">
      <button
        type="button"
        className="content__button intro__buttons__button"
        onClick={openModalNoOption}
      >
        Back this project
      </button>

      {/* Mobile */}
      <div className={`intro__buttons__bookmark mobile${bookmark ? ' selected' : ''}`} onClick={handleBookmarkChange}>

        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28" className="icon-circle" /><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" className="icon-path" /></g></svg>

      </div>

      {/* Desktop */}
      <div className={`intro__buttons__bookmark-desktop desktop${bookmark ? ' selected-desktop' : ''}`} onClick={handleBookmarkChange}>

        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28" className="icon-circle" /><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" className="icon-path" /></g></svg>

        <span className="intro__buttons__bookmark__text">Bookmark{`${bookmark ? 'ed' : ''}`}</span>
      </div>

    </div>
  );
};

export default Bookmark;
