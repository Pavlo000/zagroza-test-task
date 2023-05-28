import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import darts from '../../assets/icons/darts.svg';
import coin from '../../assets/icons/coin.svg';
import card from '../../assets/icons/card.svg';
import './Testimonials.scss';

export const Testimonials: React.FC = () => (
  <div className="Testimonials">
    <h3 className="Testimonials__title">
      Um subtítulo para quem rolou até aqui!
    </h3>

    <p className="Testimonials__subtitle regular-text">
      Aproveite esta seção para destacar os benefícios do seu produto ou serviço. Palavras-chave ajudam no SEO.
    </p>

    <ul className="Testimonials__list">
      <li className="Testimonials__item testimonial">
        <div className="testimonial__wrapper">
          <img
            src={darts}
            alt="darts"
            className="testimonial__image"
          />
          <h4 className="testimonial__title">
            Rápido
          </h4>
          <div className="testimonial__subtitle regular-text">
            Aproveite esta seção para destacar os benefícios do seu produto ou serviço.
          </div>
          <span className="testimonial__icon link">
            <PlusIcon />
          </span>
        </div>
      </li>
      <li className="Testimonials__item testimonial">
        <div className="testimonial__wrapper">
          <img
            src={coin}
            alt="darts"
            className="testimonial__image"
          />
          <h4 className="testimonial__title">
            Rápido
          </h4>
          <div className="testimonial__subtitle regular-text">
            Aproveite esta seção para destacar os benefícios do seu produto ou serviço.
          </div>
          <span className="testimonial__icon link">
            <PlusIcon />
          </span>
        </div>
      </li>
      <li className="Testimonials__item testimonial">
        <div className="testimonial__wrapper">
          <img
            src={card}
            alt="darts"
            className="testimonial__image"
          />
          <h4 className="testimonial__title">
            Rápido
          </h4>
          <div className="testimonial__subtitle regular-text">
            Aproveite esta seção para destacar os benefícios do seu produto ou serviço.
          </div>
          <span className="testimonial__icon link">
            <PlusIcon />
          </span>
        </div>
      </li>
    </ul>
  </div>
);