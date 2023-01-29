import GlobalStyle from './GlobalStyles';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { NavItems } from './Data/NavItems';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartProvider from './CartContext'
import Home from "./pages/Home";
import Products from './pages/Products';
import Product from "./pages/Product";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Success from './components/LoginForm/Success';
import Checkout from "./pages/Checkout";
import { Cart } from './pages/Cart'
import Forum from "./pages/Forum";
import Builds from "./pages/Builds";
import Projects from "./pages/Projects";

function App() {
  return (
    <CartProvider>
      <Router>
        <GlobalStyle />
        <Navbar {...NavItems}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/WishList' element={<WishList />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/CreateAccount' element={<CreateAccount />} />
          <Route path='/Success' element={<Success />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Forum' element={<Forum />} />
          <Route path='/Builds' element={<Builds />} />
          <Route path='/Projects' element={<Projects />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </CartProvider>
  )
}

export default App;

