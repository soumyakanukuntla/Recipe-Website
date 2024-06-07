import React, { useState } from 'react';
import './recipeimga.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

function Recipes({ title, calories, image, ingredients, shareAs}) {
  const [show, setShow] = useState(false);

  const Ingredientshow = () => {
    setShow(true);
  };

  const handleClose = () => setShow(false);
    

  return (
   
    <div className='recipe mb-lg-5'>
      <Card className='text-center' style={{ width: '250px', height: '500px'}}>
        <Card.Img className='p-3' src={image} alt={title} />
        <Card.Body>
          <Card.Title className='fw-bold '>{title.slice(0,20)}</Card.Title>
          <p className='fw-bold'>Calories: {calories}</p>
          <Button className='mb-3 w-75' style={{marginLeft:"12px"}} variant="outline-success" onClick={Ingredientshow}>Ingredients</Button><br />
          <Button className='w-75 p-1' style={{marginLeft:"12px"}} variant="outline-danger" onClick={() => window.open( shareAs)}>See Complete Recipe</Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton style={{backgroundColor:'#88b4dc', color:'white'}}>
          <Modal.Title  >Ingredients</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Ingredient</th>
              </tr>
            </thead>
            <tbody>
              {ingredients.map((ingredient, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{ingredient.text}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button  style={{backgroundColor:'#88b4dc', color:'white'}} onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  
  );
}

export default Recipes;
