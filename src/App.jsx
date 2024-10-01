import './App.css'
import Card from './components/Card/Card'

function App() {
    
  const devmons = []

  async function fetchData() {
    const apiURL = 'https://backend-integrar-com-frontend-k2ao.onrender.com/personagem'

    const response = await fetch(apiURL)

    const data = await response.json()

    console.log(44, data)
  }

  fetchData()

  return (
    <>
      Lista de Cards com Map: <br />
      <div className="cards">
        {devmons.map(function (devmon) {
          return <Card key={devmon.nome} item={devmon} />
        })}
      </div >
    </>
  )
}

export default App
