import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [chiste, setChiste] = useState("");
  const [citas, setCita] = useState("");
  const [cargandoChiste, setCargandoChiste] = useState(true);
  const [cargandoCita, setCargandoCita] = useState(true);



  const getChiste= async () =>
  {
    setCargandoChiste(true);
      await fetch('https://icanhazdadjoke.com',{
        headers: {'Accept':'application/json'}
      }).then((response) => response.json()).then((data) => {
        setChiste(data.joke);
        console.log(data);
      }).catch(error => console.error(error));
      setCargandoChiste(false);
  }

  const getCita= async () =>
  {
    setCargandoCita(true);
      await fetch('https://quote-garden.onrender.com/api/v3/quotes/random').then((response) => response.json()).then((data) => {
        setCita(data.data[0].quoteText);

        console.log(data.data[0].quoteText);
      }).catch(error => console.error(error));
      setCargandoCita(false);
  }

   
  useEffect(() => {
    getChiste();
    getCita();
  }, []);

  return (
    <>
      <h1>Bienvenido</h1>
      <div className="card">
        <button onClick={getChiste}>
          obtener nuevo chiste: 
        </button>
        <br />
        {cargandoChiste ? <h1>cargando</h1> : <p >{chiste}</p>}
      </div>
      <div className="card">
        <button onClick={getCita}>
          obtener nueva cita celebre 
        </button>
        <br />
        {cargandoCita ? <h1>cargando</h1> : <p >{citas}</p>}
      </div>
    </>
  )
}

export default App
