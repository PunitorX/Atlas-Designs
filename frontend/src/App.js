import GlobalStyle from './GlobalStyles';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { NavItems } from './components/Data/NavItems';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar {...NavItems}/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;

