import './Card.css'
import { useState } from 'react'

function Card({ cardData }) {

  const [isSelected, setIsSelected] = useState(false)
  const [isInitialSelect, setIsInitialSelect] = useState(true)

  function handleCardClick(evt) {
    setIsSelected(!isSelected)
    if (isSelected && isInitialSelect) {
      setIsInitialSelect(true)
    } else {
    }
    !isSelected && setIsInitialSelect(true)
  }

  function handleButtonClick() {
    setIsSelected(!isSelected)
    setIsInitialSelect(false)
  }

  function handleMouseOut() {
    if (isSelected) {
      if (isInitialSelect) {
        setIsInitialSelect(false)
      }
    }
  }

  return (
    <div className="card card__container">
      <div className={`card__info-container card-info 
           ${isSelected && 'card__info-container_active'} 
           ${cardData.stock === 0 && 'card__info-container_disabled'}
           ${isSelected && isInitialSelect
        ? 'card__info-container_no-hover'
        : ''}`}
           onMouseLeave={handleMouseOut}
           onClick={handleCardClick}>
        <div className={`card-info__container`}>
          <p className={`card-info__slogan ${isSelected && !isInitialSelect && 'card-info__slogan_active'}`}>
            Сказочное заморское яство</p>
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
          <div className={`card-info__weight weight-icon ${isSelected && 'weight-icon_active'}`}>
            <p className="weight-icon__quantity">{cardData.weight}</p>
            <p className="weight-icon__unit">кг</p>
          </div>
        </div>
      </div>
      {cardData.stock === 0
        ? (
          <p className="card__description card__description_out-of-stock">{`Печалька, ${cardData.title} закончился.`}</p>)
        : (
          <>
            {isSelected
              ? (<p className="card__description">{cardData.description}</p>)
              : (
                <p className="card__description">Чего сидишь? Порадуй котэ,&ensp;
                  <button className="card__description_accent"
                          onClick={handleButtonClick}>купи
                  </button>
                  <span className="card__description_accent"
                        style={{ borderBottomColor: 'transparent' }}>.</span></p>
              )}
          </>
        )}
    </div>
  )
}

export default Card