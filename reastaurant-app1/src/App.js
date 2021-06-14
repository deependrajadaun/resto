import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Navbar,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import RestaurantList from './components/RestaurantList';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetails from './components/RestaurantDetails';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import Home from './components/Home';
import Login from './components/Login';


{/* <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/> */}

function App() {
  return (
    <div className="App">
      <Router>
       
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Resto</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/">Home </Link> </Nav.Link>
      <Nav.Link href="#link"><Link to="/list">List </Link> </Nav.Link>
      <Nav.Link href="#link"><Link to="/create">Create </Link> </Nav.Link>
      <Nav.Link href="#link"><Link to="/search">Search </Link> </Nav.Link>
      <Nav.Link href="#link"><Link to="/update">Update </Link> </Nav.Link>
      <Nav.Link href="#link"><Link to="/login">Login </Link> </Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
     



      

      
      <Route path="/list">
        <RestaurantList />
      </Route>
      <Route path="/create">
        <RestaurantCreate />
      </Route>
      <Route path="/search">
        <RestaurantSearch />
      </Route>
      <Route path="/update/:id"
      render={props=>(
        <RestaurantUpdate {...props} />
      )}
      >
        
      </Route>

      <Route path="/login"
      render={props=>(
        <Login {...props} />
      )}
      >
        
      </Route>

      <Route path="/details">
        <RestaurantDetails />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      </Router>  
    </div>
  );
}

export default App;


/* <li><Link to="/">Home </Link> </li>
          <li><Link to="/list">List </Link> </li>
          <li><Link to="/create">Create </Link> </li>
          <li><Link to="/search">Search </Link> </li>
          <li><Link to="/update">Update </Link> </li> */