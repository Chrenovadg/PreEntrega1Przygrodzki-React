import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  return (
    <>
      <div className='App'>
        <NavBar  />
        <ItemListContainer titulo="GINGERY ALE" precio={850}/>
        <ItemListContainer titulo="DAMASCO FANCY" precio={850}/>
        <ItemListContainer titulo="PIÑA COLADA" precio={850}/>
      </div>
    </>
  )
}

export default App


