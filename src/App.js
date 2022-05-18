import './App.css';
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel } from "react-bootstrap"
import CategoryList from './components/CategoryList';
import Category from './components/Category'
function App() {
  return (

    <div className="App">
      <Navbar />
      <Container>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="img-fluid" src='https://thumbs.dreamstime.com/b/three-bottles-lipton-ice-tea-soft-drink-poznan-pol-jun-plastic-brand-sold-belonging-to-unilever-british-dutch-150243220.jpg' />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="img-fluid" src='https://insiteooh.com/storage/app/uploads/public/5dd/669/e55/5dd669e55228c181021042.jpg' />
          </Carousel.Item>
        </Carousel>
      </Container>
      <h1 class="h1">Categories</h1>
      <Container>
        <CategoryList />
      </Container>
    <Category/>
    </div>

  );
}


export default App;
