import { Card } from "react-bootstrap";
const Category = () => {
    return ( 
        <div className="d-flex flex-row flex-nowrap">
            <Card>
                <div className=" card card-body" style={{ display: 'inline-block' }}>
                    <Card.Img variant="top" src="https://assets.epicurious.com/photos/57eebe2eb382c3c017d3fff0/16:9/w_2560%2Cc_limit/supermarket-shelves.jpg" />
                    <Card.Body>
                        <button className="category-button">All</button>
                    </Card.Body>
                </div>
            </Card>
        </div>
     );
}
 
export default Category;