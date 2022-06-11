import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/homepage/Home';
import ShoppingCart from './components/shopping_cart/Cart';
import { useEffect,useState } from "react";
import ProductPage from './components/product_page/Product';
import './styles/index.css'
import Category from './components/categories/Category';
const axios = require('axios')
function App() {
  const [products, setProducts] = useState([]);
  let productsList=[];
  let categories = [...new Set(products.map(product => product.category)).add('All')]
  useEffect(() => {
    
    (async () => {
      const result = await axios.get('https://matrixbytes-products-microservice.vercel.app/api/products')
      productsList = result.data
      setProducts(productsList);
    })();
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
          <Route exact path={`/product/${products.map(product=>product.id)}`}>
            <ProductPage />
          </Route>
          {categories.map(category =><Route exact path={`/category/${category.toLowerCase()}`}>
            <Category title={category}/>
          </Route>)}
        </Switch>
        

      </div>
    </Router>

  );
}


export default App;
