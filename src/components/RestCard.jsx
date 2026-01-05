import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restaurant}) {
  return (
    <Link to={`/restaurant_view/${restaurant.id}`} style={{textDecoration:'none'}}>
        <Card style={{ width: '100%' }}>
          <Card.Img height={'360px'} variant="top" src={restaurant.photograph} />
          <Card.Body>
            <Card.Title className='text-center text-warning p-3'>{restaurant.name}</Card.Title>
            <hr/>
           <Row className='p-3'>
                <Col className='ms-3'>
                    <Card.Text>
                    {restaurant.neighborhood}
                    </Card.Text>
                </Col>
                 <Col>
                    <Card.Text>
                      Cusine Type{restaurant.cuisine_type}
                    </Card.Text>
                </Col>
           </Row>
           
          </Card.Body>
        </Card>
    </Link>
  )
}

export default RestCard