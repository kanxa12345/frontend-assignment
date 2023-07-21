import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Product />}></Route>
          <Route exact path='/:id' element={<ProductDetail />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
