import './style.scss';

import img from '../../assets/images/logo-mastercraft.svg';
import bookmark from '../../assets/images/icon-bookmark.svg';

const Intro = () => (
  <section className="content__wrapper intro">

    <div className="intro__image">
      <img src={img} alt="Logo Mastercraft" />
    </div>

    <h1 className="intro__title">Mastercraft Bamboo Monitor Riser</h1>
    <p className="intro__text">A beautiful & handcrafted monitor stand to reduce neck and eye strains</p>

    <div className="intro__buttons">
      <button type="button" className="content__button intro__buttons__button">Back this project</button>
      <div className="intro__buttons__bookmark">
        <img src={bookmark} alt="Bookmark button" />
      </div>
    </div>

  </section>
);

export default Intro;
