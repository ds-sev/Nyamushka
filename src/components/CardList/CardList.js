import Card from '../Card/Card'
import assortment from '../../utils/assortment'

function CardList() {

  return (

    <ul>
      {
        assortment.map((item) => (
          <li>
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