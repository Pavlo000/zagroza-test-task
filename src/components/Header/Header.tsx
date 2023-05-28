import person from '../../assets/icons/person.svg';
import { Navigation } from '../Navigation';
import './Header.scss';

export const Header: React.FC = () => (
  <header className="Header">
    <div className="Header__wrapper container">
      <div className="Header__navigation">
        <Navigation />
      </div>
      <div className="Header__content">
        <div className="Header__block">
          <h1 className="Header__title">
            Um slogan chamativo aqui.
          </h1>
          <h2 className="Header__subtitle">
            Um texto sobre o seu produto ou serviço. Explique
            <span className="Header__selected-text">
              {' porque ele é valioso '}
            </span>
            e direcione o usuário ao próximo objetivo.
          </h2>

          <div className="Header__buttons">
            <div className="Header__button-wrapper">
              <button
                type="button"
                className="
            Header__button
            button
            link
         "
              >
                <span className="button-text">
                  Eu quero!
                </span>
              </button>
            </div>

            <div className="Header__button-wrapper">
              <button
                type="button"
                className="
          Header__button
          Header__button--transaparent
          button
          link
        "
              >
                <span className="button-text">
                  Conhecer mais
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="Header__block">
          <img className="Header__image" src={person} alt="person" />
        </div>
      </div>
    </div>
  </header>
);
