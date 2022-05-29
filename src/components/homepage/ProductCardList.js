import { CardGroup, Container } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductCardList = () => {
    return ( <CardGroup>
        <ProductCard/>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        
    </CardGroup> );
}
 
export default ProductCardList;