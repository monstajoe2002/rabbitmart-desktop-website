import './App.css';
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from "react-bootstrap"
function App() {
  return (

    <div className="App">
      <Navbar />
      <Card style={{ width: '18rem',borderRadius:'15px'}}>
        <Card.Img variant="top" src="image.jpg" />
        <Card.Body >
          <Card.Title style={{ color: 'green' }}>Card Title</Card.Title>
          <Card.Text style={{ color: 'green' }}>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <button class="button" >Go somewhere</button>
        </Card.Body>
      </Card>
    </div>

  );
}


export default App;
