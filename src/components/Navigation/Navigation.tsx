import { ReactComponent as MenuLogo } from '../../assets/icons/menu.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as InstagramLogo } from '../../assets/icons/instagram.svg';
import { ReactComponent as FacebookLogo } from '../../assets/icons/facebook.svg';
import './Navigation.scss';

export const Navigation: React.FC = () => (
  <nav className="Navigation">
    <div className="Navigation__block">
      <div className="Navigation__menu">
        <a href="#menu" className="Navigation__link link">
          <MenuLogo />
        </a>
      </div>
      <ul className="Navigation__list">
        <li className="Navigation__item">
          <a href="/fazemos" className="link">
            o que fazemos
          </a>
        </li>
        <li className="Navigation__item">
          <a href="/ajudamos" className="link">
            como te ajudamos
          </a>
        </li>
        <li className="Navigation__item">
          <a href="/conosco" className="link">
            fale conosco
          </a>
        </li>
      </ul>
    </div>
    <div className="Navigation__block Navigation__block--logo">
      <a href="/" className="Navigation__link link">
        <div className="Navigation__logo">
          <Logo />
        </div>
      </a>
    </div>
    <div className="Navigation__block">
      <a href="https://www.instagram.com/" className="Navigation__link link">
        <InstagramLogo />
      </a>
      <a href="https://www.instagram.com/" className="Navigation__link link">
        <FacebookLogo />
      </a>
    </div>
  </nav>
);
