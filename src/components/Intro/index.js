import './style.scss';

import Bookmark from 'src/components/Bookmark';

import img from '../../assets/images/logo-mastercraft.svg';

const Intro = () => (
  <section className="content__wrapper intro">

    {/* Logo */}
    <div className="intro__image">
      <img src={img} alt="Logo Mastercraft" />
    </div>

    {/* Content */}
    <h1 className="intro__title">Mastercraft Bamboo Monitor Riser</h1>
    <p className="intro__text">A beautiful & handcrafted monitor stand to reduce neck and eye strains</p>

    <Bookmark />

  </section>
);

export default Intro;
