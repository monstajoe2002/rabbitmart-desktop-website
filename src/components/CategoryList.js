import { Card, Container } from "react-bootstrap";

const CategoryList = () => {
    return ( <div className="container-fluid py-2">
        <div class="d-flex flex-row flex-nowrap">
        
        <Card style={{ width: '18rem', display: 'inline-block' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                
                <button className="view-all-button" variant="primary">View</button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem',display:'inline-block' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                
                <button className="view-all-button" variant="primary">View</button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem', display: 'inline-block' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                
                <button className="view-all-button" variant="primary">View</button>
            </Card.Body>
        </Card>
        </div>
    </div> 
    );
}
 
export default CategoryList;