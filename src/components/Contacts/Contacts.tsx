import { ReactComponent as WhatsAppIcon } from '../../assets/icons/whats-app.svg';
import { ReactComponent as MessageIcon } from '../../assets/icons/message.svg';
import { FormField } from '../FormField';
import './Contacts.scss';

export const Contacts: React.FC = () => (
  <div className="Contacts">
    <div className="Contacts__icon">
      <MessageIcon />
    </div>

    <h3 className="Contacts__title">
      Ainda tem dúvidas? Fale conosco!
    </h3>

    <div className="Contacts__section">
      <div className="Contacts__block">
        <p className="Contacts__description regular-text">
          Ofereça um meio de comunicação direto. Pode ser um
          {' '}
          <u>
            <a href="mailto:contato@email.com.br">
              contato@email.com.br
            </a>
          </u>
          <br />
          <br />
          Ou crie um formulário ao lado que entrem em contato
          {' '}
          <span className="Contacts__selected-text">
            o mais rápido possível!
          </span>
          <a href="https://www.whatsapp.com" className="Contacts__whatsApp link">
            <WhatsAppIcon />
            <span className="regular-text">
              <u>
                Hey! Estamos no whatsapp!
              </u>
            </span>
          </a>
        </p>
      </div>
      <div className="Contacts__block">
        <FormField />
      </div>
    </div>
  </div>
);
