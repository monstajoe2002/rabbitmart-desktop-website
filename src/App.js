import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Button} from "react-bootstrap"
import Product from './components/Product';
import ProductList from './components/ProductList';
function App() {
  return (

    <div className="App">
      <Navbar />
      {/* <Offers/> */}
      
      <Container>
        <h1 id='heading'>Recommended</h1>
        <ProductList/>
      </Container>
    
    </div>

  );
}


export default App;
