import Card from '../Card/Card'
import './CardList.css'
import assortment from '../../utils/assortment'

function CardList() {
  console.log(assortment[0].id)

  return (

    <ul className="cards-list">
      {
        assortment.map((item) => (
          <li key={item.id}>
            <Card
              cardData={item}
            />
          </li>
        ))
      }
    </ul>

  )
}

export default CardList