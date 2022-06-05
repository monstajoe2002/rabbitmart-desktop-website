import { Container } from "react-bootstrap";
import ProductCardList from "./ProductCardList";
const Home = () => {
    return ( 
        <Container>
            <h1 id='heading'>Recommended</h1>
            <ProductCardList />
            <h1 id='heading'>Offers of the Week!</h1>
            <ProductCardList />
            <h1 id='heading'>Champions Breakfast</h1>
            <ProductCardList />
            <h1 id='heading'>Clean & Shine!</h1>
            <ProductCardList />
            <h1 id='heading'>Rabbit's Picks</h1>
            <ProductCardList />
        </Container>
     );
}
 
export default Home;