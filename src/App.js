import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';
import {Navbar, NavbarBrand} from "reactstrap"
function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className='conatiner'>
          <NavbarBrand href='/'>Resturant Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
