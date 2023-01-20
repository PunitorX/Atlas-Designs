import GlobalStyle from './GlobalStyles';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { NavItems } from './Data/NavItems';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartProvider from './CartContext'
import Products from './pages/Products';

function App() {
  return (
    <CartProvider>
      <Router>
        <GlobalStyle />
        <Navbar {...NavItems}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  )
}

export default App;

