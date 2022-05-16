import './App.css';
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from "react-bootstrap"
function App() {
  return (

    <div className="App">
      <Navbar />
      <Card style={{ width: '12rem',height:'16rem',borderRadius:'15px',margin:'20px'}}>
        <Card.Img variant="top" src="image.jpg" />
        <Card.Body >
          <Card.Title style={{ color: 'green' }}>Coca Cola Can 300ml</Card.Title>
          <Card.Text style={{ color: 'green' }}>
            20.00 EGP
          </Card.Text>
          <button class="button">View Product</button>
        </Card.Body>
      </Card>
    </div>

  );
}


export default App;
