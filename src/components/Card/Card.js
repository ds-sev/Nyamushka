import './Card.css'
import cat from '../../images/Photo-min.png'

function Card() {

  return (
    <div className="card card__container">
      <div className="card__info-container card-info">
        <div className="card-info__container">
          <p className="card-info__slogan">Котэ не одобряет?</p>
          <h3 className="card-info__title">Нямушка</h3>
          <p className="card-info__subtitle">с рыбой</p>
          <p className="card-info__options">
            <span className="card-info__options_accent">40</span> порций</p>
          <p className="card-info__options">
            <span className="card-info__options_accent">5</span> мышей в подарок
            заказчик доволен</p>
          <div className="card-info__weight">
            <p>5</p>
            <p>кг</p>
          </div>
        </div>
        {/*<img src={cat} alt="кот породы Британская длинношерстная" />*/}
      </div>
      <p className="card__description">Филе из цыплят с трюфелями в бульоне.</p>
    </div>
  )
}

export default Card