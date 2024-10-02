import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [devmons, setDevmons] = useState([])

  async function fetchData() {
    const apiURL = 'https://backend-integrar-com-frontend-k2ao.onrender.com/personagemm'

    const response = await fetch(apiURL).catch(function (error) {
      console.error('Erro ao chamar endpoint /personagem', error)
      toast.error('Erro ao carregar lista de Devmon')
    })

    if (response.ok) {
      const data = await response.json()

      setDevmons(data)
    } else {
      toast.error('Erro ao carregar lista de Devmon')
    }

  }

  useEffect(function () {
    fetchData()
  }, [])

  return (
    <>
      Lista de Cards com Map: <br />
      <div className="cards">
        {devmons.map(function (devmon) {
          return <Card key={devmon.nome} item={devmon} />
        })}
      </div >
      <ToastContainer />
    </>
  )
}

export default App
