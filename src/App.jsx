import { useState } from 'react'
import Article from './data/Article'

function App() {

  const [firstArray, setFirstArray] = useState(["Sviluppatore web", "Designer grafico", "Copywriter", "Project manager", "Data analyst"]);
  const [newArray, setNewArray] = useState("");

  // console.log(firstArray.Article[0])
  const addNewArray = event => {
    event.preventDefault();
    const arrayNew = [...firstArray, newArray];
    setFirstArray(arrayNew);
  }
  const deleteLi = (indexToDelete) => {
    const myNewArray = firstArray.filter((element, index) => indexToDelete !== index);
    setFirstArray(myNewArray);
  }

  return (
    <>
      <div className='container justify-content-center mt-5'>
        <h1 className='text-black'>ARTICLE LIST</h1>
        <ul className="list-group container mt-2">
          {firstArray.map((element, index) =>
            <li key={index} className="disabled mt-2 text-white bg-primary">
              <h3>{element}</h3>
              <button onClick={() => deleteLi(index)}>Delete article</button>
            </li>)
          }
        </ul>
      </div>
      <form className='container' onSubmit={addNewArray}>
        <div className='container d-flex justify-content-center mt-5'>
          <input className='text-center' type="text" placeholder='add new article' onChange={event => setNewArray(event.target.value)} />
        </div>
      </form >
    </>

  )
}

export default App

/*
1.  Aggiungere la possibilità di cancellare ciascun articolo utilizzando un'icona.
 <button onClick={() => deleteLi(index)}>Delete article</button>

*/