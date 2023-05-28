import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Testimonials } from "./components/Testimonials";

import './App.scss';
import { Contacts } from "./components/Contacts";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="App__section container">
          <Testimonials />
        </div>
        <div className="App__section container">
          <About />
        </div>
        <div className="App__section App__section--background">
          <div className="container">
            <Contacts />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
