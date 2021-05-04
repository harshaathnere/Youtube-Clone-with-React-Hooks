import React from 'react';
import { Container,Row, Col,Form,Button} from 'react-bootstrap';
import './App.css';
import Video from './Video';


function App() {
  return (
    <Container>
      <Row >
      <Col style={{border: "2px solid red"}}>
  
       <Form>
 <Form.Row>
<Col>
<Form.Control size="lg" type="text" placeholder="Search the video....." />
</Col>
<Col>
<Button variant="secondary" size="lg"> Search</Button>
</Col>
</Form.Row>
</Form>
</Col>
</Row>

 <div>
    <Row>
    <Video/>
    </Row>
    </div>
</Container>
  );
}

export default App;
