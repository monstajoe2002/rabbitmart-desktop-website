import { Card } from "react-bootstrap";

const CategoryList = () => {
    return (<div class="container-fluid py-2">
        <div class="d-flex flex-row flex-nowrap">
            <div className=" card" style={{ width: '18rem', display: 'inline-block' }}>
                <Card.Img variant="top" src="https://assets.epicurious.com/photos/57eebe2eb382c3c017d3fff0/16:9/w_2560%2Cc_limit/supermarket-shelves.jpg" />
                <Card.Body>
                    <button className="category-button">All</button>
                </Card.Body>
            </div>


            <div className=" card" style={{ width: '18rem', display: 'inline-block' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                <Card.Body>
                    <button className="category-button">Fruits & Vegtables</button>
                </Card.Body>
            </div>


            <div className=" card" style={{ width: '18rem', display: 'inline-block' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1580944027064-e20ebf8e1ff0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                <Card.Body>
                    <button className="category-button">Meat, Poultry & Seafood</button>
                </Card.Body>
            </div>
            <div className=" card" style={{ width: '18rem', display: 'inline-block' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <Card.Body>
                    <button className="category-button">Dairy & Eggs</button>
                </Card.Body>
            </div>
            <div className=" card" style={{ width: '18rem', display: 'inline-block' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80" />
                <Card.Body>
                    <button className="category-button">Breakfast</button>
                </Card.Body>
            </div>
            <div className="card" style={{ width: '18rem', display: 'inline-block' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1187&q=80" />
                <Card.Body>
                    <button className="category-button">Cosmetics</button>
                </Card.Body>
            </div>
            <div className=" card" style={{ width: '18rem', display: 'inline-block' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80" />
                <Card.Body>
                    <button className="category-button">Stationery</button>
                </Card.Body>
            </div>
        </div>

    </div>
    );
}

export default CategoryList;