import { ReactComponent as InstagramLogo } from '../../assets/icons/instagram.svg';
import { ReactComponent as FacebookLogo } from '../../assets/icons/facebook.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import './Footer.scss';

export const Footer: React.FC = () => (
  <footer className="Footer">
    <div className="Footer__section">
      <div className="Footer__icon link--lite">
        <Logo />
      </div>

      <div className="Footer__social">
        <div className="Footer__icon link link--lite">
          <InstagramLogo />
        </div>
        <div className="Footer__icon link link--lite">
          <FacebookLogo />
        </div>
      </div>
    </div>
    <div className="Footer__section">
      <p className="regular-text">
        Nice template by @lopesluiza on Figma - 2021
      </p>
    </div>
  </footer>
)