import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Button} from "react-bootstrap"
import ProductCardList from './components/homepage/ProductCardList';
function App() {
  return (

    <div className="App">
      <Navbar />
      {/* <Offers/> */}
      
      <Container>
        <h1 id='heading'>Recommended</h1>
        <ProductCardList/>
      </Container>
    
    </div>

  );
}


export default App;
