import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const {fact} = data
        setFact(fact)

        const firstThreeWords = fact.split(' ', 3).join(' ')
        // No usamos ?json=true aquí, porque solo queremos la imagen directa
        const imageUrl = `${CAT_PREFIX_IMAGE_URL}/cat/says/${firstThreeWords}?fontSize=50&fontColor=red`
        setImageUrl(imageUrl)
      })
      
  }, [])

  return (
    <main>
      <h1>APP DE GATOS</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt="Imagen de un gato" />}
    </main>
  )
}

export default App
