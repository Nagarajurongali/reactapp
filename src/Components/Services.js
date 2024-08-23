import React from 'react'
import Header from './Header'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Services() {
  return (
    <div>
      <Row>
        <Col sm={2}>
          <Header />
        </Col>
        <Col sm={10}>
          <h1>Services Page</h1>
        </Col>
      </Row>
        
        
    </div>
  )
}

export default Services