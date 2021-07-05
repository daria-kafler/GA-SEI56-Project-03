import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

const DisplayDrinks = ({ drinks, filteredDrinks }) => {
  
  return (
    <Col className="right-api">
      <p className=""></p>      
      <Row>
        {(filteredDrinks.length > 0 ? filteredDrinks : drinks).map(( drink ) => {
          return (
            <Card key={drink._id} style={{ width: '16rem' }}>
              <Card.Img variant="top" src={drink.image} />
              <Card.Header as="h3">
                {drink.drink}
                      
                <Card.Title as="h6">{drink.country}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>{drink.description}</Card.Text>
                <Card.Text></Card.Text>
                <Container >
                  <Row>
                    <Col className="card-btn">
                      <Link to={`/drink/${drink._id}`}>
                        <Button>More info</Button>
                      </Link>
                      
                    </Col>
                  </Row>
                </Container>
                
              </Card.Body>
            </Card>
          )
                  
        })}
      </Row>
    </Col>
  )
    
  
}

export default DisplayDrinks