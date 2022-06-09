import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/homepage/Home';
import ShoppingCart from './components/shopping_cart/Cart';
import { useEffect,useState } from "react";
import ProductPage from './components/product_page/Product';
import './styles/index.css'
import { v4 } from 'uuid'
const axios = require('axios')
function App() {
  const [products, setProducts] = useState([]);
  let productsList;

  useEffect(() => {

    (async () => {
      const result = await axios.get('https://matrixbytes-products-microservice.vercel.app/api/products')
      productsList = result.data
      setProducts(productsList);
    })();
    console.log(products)
  }, []);
  return (
    
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
          <Route exact path="/my-cart">
            <ShoppingCart />
          </Route>
          <Route exact path='/product'>
            <ProductPage />
          </Route>
        </Switch>
        

      </div>
    </Router>

  );
}


export default App;
