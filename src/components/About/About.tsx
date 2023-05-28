import './About.scss';

export const About: React.FC = () => (
  <div className="About">
    <div className="About__block">
      <p className="About__hashtag uppercase-text">
        #contecomagente
      </p>
      <h3 className="About__title">
        Simples, rápido e do seu jeito.
      </h3>

      <p className="About__subtitle regular-text">
        Mostre os valores da sua marca e como ela pode fazer parte da vida do usuário que está lendo. Gerar identificação é a chave para 
        <span className="About__selected-text">
          {' conquistar seu cliente.'}
        </span>
      </p>

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
    <div className="About__block">
      <div className="About__background" />
    </div>
  </div>
)