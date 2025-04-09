import { useState } from 'react'
import Article from './data/Article'

function App() {

  return (
    <>
      <ul class="list-group container mt-2">
        {Article.map(element =>
          <li class="list-group-item disabled mt-2 text-white bg-primary">
            {element}
          </li>)
        }
      </ul>
    </>

  )
}

export default App


// Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.
