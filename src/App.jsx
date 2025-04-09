import { useState } from 'react'
import Article from './data/Article'

function App() {

  const [firstArray, setFirstArray] = useState({ Article });
  const [newArray, setNewArray] = useState("");

  // console.log(firstArray.Article[0])
  const addNewArray = event => {
    event.preventDefault();
    const arrayNew = [...firstArray, newArray];
    setFirstArray(arrayNew);
    console.log(setFirstArray(arrayNew))
  }

  return (
    <>
      <form onSubmit={addNewArray}>
        <input type="text" onChange={event => setNewArray(event.target.value)} />
        <ul className="list-group container mt-2">
          {firstArray.map((element, index) =>
            <li key={index} className="list-group-item disabled mt-2 text-white bg-primary">
              {element}
            </li>)
          }
        </ul>
      </form >
    </>

  )
}

export default App

/*

Milestone 2
Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog.
Al submit del form, mostrare la lista degli articoli aggiornati.

*/