import './App.css'
import CardList from '../CardList/CardList'

function App() {

  return (
    <main className="main-page">
      <p className="main-page__title">Ты сегодня покормил кота?</p>
      <CardList />
    </main>
  )
}

export default App