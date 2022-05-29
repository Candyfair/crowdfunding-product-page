import PropTypes from 'prop-types';

import './style.scss';

import Options from '../Options';

const About = ({ options }) => (
  <section>
    <h2>About this project</h2>

    <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>

    <p>Featuring artisan craftmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens ans USB sticks to be stored under the stand.</p>

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
