import './FormField.scss';

export const FormField: React.FC = () => (
  <div className="FormField">
    <form
      className="FormField__form"
      method="get"
    >
      <label className="FormField__label">
        <p className="form-text">
          Name
        </p>
        <input
          className="FormField__input"
          placeholder="Nome Sobrenome"
          type="text"
        />
      </label>
      <label className="FormField__label">
        <p className="form-text">
          Email
        </p>
        <input
          className="FormField__input"
          placeholder="nome@email.com.br"
          type="email"
        />
      </label>
      <label className="FormField__label">
        <p className="form-text">
          Phone
        </p>
        <input
          className="FormField__input"
          placeholder="21 9988-7766"
          type="tel"
        />
      </label>

      <div className="FormField__button-wrapper">
        <button
          type="submit"
          className="FormField__button link"
        >
          <span className="button-text">
            Enviar!
          </span>
        </button>
      </div>
    </form>
  </div>
);
