import React from "react";
import "./styles.css";
import "bulma/css/bulma.min.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Link } from "react-router-dom";

// Componentes
import Header from './components/Header/header';
import { Card } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import Footer from "./components/Footer/Footer";
import Info from "./components/Item/Item";
import Item from "./components/ItemList/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { containerClasses } from "@mui/system";

function App () {
    return (
      <div className="App">

        <BrowserRouter>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/category:/id">Productos</Link>
          <Link to="/item/:id">Detalle</Link>
        </nav>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
          </BrowserRouter>

        <Header>
        </Header>

        <NavBar>

        </NavBar>

        <div className="ItemContainer">
      {Item.map((e)=>{
        return(
          <Info name={e.name} number={e.number} img={e.img}/>
        );
      })}
  
        </div>

      <Footer>
      </Footer>
      </div>
    )
  }

export default App;


/*     /*<ItemListContainer title='Soy un producto nuevo'
      subtitle='¡Soy un producto que está en oferta!'>
      </ItemListContainer>
      
      <ItemListContainer title='Soy un producto viejo'
      subtitle='¡Soy un producto que se está por agotar!'>
      </ItemListContainer>*/
/* Ejemplos de la clase:

class App extends React.Component {
render() {
  return (
    <div>
      <NavBar>
      </NavBar>
      <Header title='Soy el título a partir de una prop'
      subtitle='Soy un subtítulo a partir de una prop'
      jueves={true}
      cantAlumnos={89}
      children={['micaela', 'damian', 'erica']}
      />
      <Header title='Soy un VIEJO título'
      subtitle='Soy un subtítulo a partir de una VIEJA prop'
      viernes={false}
      cantAlumnos={79}
      />
      <Header 
      />
      <div className='UserSection'>
        <CardComponent 
        name='Arabella Di Salvo' 
        date='Se unio en Enero 2021'
        description='Front End Developer'
        img='https://react.semantic-ui.com/images/avatar/large/matthew.png'
        />
        <CardComponent 
        name='Raúl Gutiérrez' 
        date='Se unio en Abril 2022'
        description='Full Stack Developer'
        img='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
        />
        <CardComponent 
        name='Sara Falabella' 
        date='Se unio en Marzo 2021'
        description='DevOps'
        img='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
        />
      </div>
    </div>
  )
}
}

export default App;

/* Más ejemplos de la clase:

// componentes

import NavBar from "./components/NavBar.js";

const styles = {
  heading: {
    color: "green",
    fontSize: 24,
    backgroundColor: "yellow"
  },
  tres: {
    color: "red"
  }
};

const name = "Eder";
const city = "Ushuaia";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <h1 id="title">React JS - Clase 03</h1>
        <div className="row">
          <h2>JSX & WEBPACK</h2>
          <p>Lorem ipsum...</p>
        </div>
      </div>
    );
  }
}

 export default App;

 /* Aún más ejemplos de la clase:

 class App extends React.Component{
  render() {
    return (

/* Ejemplos:

      <div className="App">
        <h1 style={styles.heading}>Hola</h1>
        <p className="paragraph">¡Hola! Mi nombre es: {name}</p>
        <p>Soy de la ciudad de {city.toUpperCase()} </p>
        <p style={{ color: "blue", fontSize: 28, border: "1px solid black" }}>{5+9}</p>
        <p style={styles.tres}>Tres a Uno</p>
        </div>
    );
  }
 }
 */