import React from 'react'
import Header from './Header'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Dashboard() {
  return (
    <div>
      <Row>
        <Col sm={2}>
          <Header />
        </Col>
        <Col sm={10}>
          <h1>Dashboard Page</h1>

        </Col>
      </Row>
        
        
    </div>
  )
}

export default Dashboard