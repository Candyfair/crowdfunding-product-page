// == Import
import './styles/index.scss';

import {
  Header,
  Footer,
  Intro,
  Funding,
  About,
  ModalDisplay,
} from './components';

// Import data
import data from './data/options';
import targets from './data/targets';

// == Composant
const App = () => {
  const { options } = data;
  const { target, date } = targets;

  return (
    <div className="global">
      <header>
        <Header />
      </header>

      <main className="content">
        <Intro />
        <Funding target={target} date={date} />
        <About options={options} />
      </main>

      <footer className="footer">
        <Footer />
      </footer>

      <ModalDisplay pledges={options} />
    </div>
  );
};

// == Export
export default App;
