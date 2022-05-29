import PropTypes from 'prop-types';

import './style.scss';

import Options from '../Options';

const About = ({ options }) => (
  <section>
    <h2>About this project</h2>

    <ul>
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
    </ul>
    <Options options={options} />
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
