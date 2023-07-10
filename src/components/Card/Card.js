import './Card.css'
import cat from '../../images/Photo-min.png'

function Card({ cardData }) {

  return (
    <div className="card card__container">
      <div className="card__info-container card-info">
        <div className="card-info__container">
          <p className="card-info__slogan">Сказочное заморское яство</p>
          <h3 className="card-info__title">Нямушка</h3>
          <p className="card-info__subtitle">{cardData.title}</p>
          <p className="card-info__options">
            <span className="card-info__options_accent">{cardData.quantity}</span> порций</p>
          <p className="card-info__options">
            {
              cardData.bonus.quantity > 1 &&
              <span className="card-info__options_accent"> {cardData.bonus.quantity}&ensp;</span>
            }
            {cardData.bonus.text}</p>
          <div className="card-info__weight weight-icon">
            <p className="weight-icon__quantity">{cardData.weight}</p>
            <p className="weight-icon__unit">кг</p>
          </div>
        </div>
        {/*<img src={cat} alt="кот породы Британская длинношерстная" />*/}
      </div>
      <p className="card__description">{cardData.description}</p>
    </div>
  )
}

export default Card