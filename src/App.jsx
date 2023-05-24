import "./App.css"
import { NavBar } from './components/layout/navBar/NavBar'
import { ItemListContainer } from './components/layout/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <header>
      <NavBar />
    </header>
    <div className="bienvenida">
      <ItemListContainer saludo={"¡Bienvenido a One-Manga!"} />
    </div>
    </>
  )
}

export default App
