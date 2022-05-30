import PropTypes from 'prop-types';

import './style.scss';

import Options from '../Options';

const About = ({ options }) => (
  <section className="content__wrapper about">
    <h2 className="about__title">About this project</h2>

    <p className="about__text">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>

    <p className="about__text">Featuring artisan craftmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens ans USB sticks to be stored under the stand.</p>

    {
      options.map((optObj) => (
        <>
          <Options
            key={optObj.id}
            {...optObj}
          />
        </>
      ))
    }
  </section>
);

About.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      pledge: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      qty: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default About;
