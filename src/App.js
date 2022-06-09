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

// == Composant
const App = () => {
  const { options } = data;
  return (
    <div className="global">
      <header>
        <Header />
      </header>

      <main className="content">
        <Intro />
        <Funding />
        <About options={options} />
      </main>

      <footer className="footer">
        <Footer />
      </footer>

      <ModalDisplay />
    </div>
  );
};

// == Export
export default App;
