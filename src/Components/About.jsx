import React from 'react'
import Header from './Header'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {productsData} from '../Data/Products'
import { Link } from 'react-router-dom'

function About() {
  

  return (
    <div>
      <Row>
        <Col sm={2}>
          <Header />
        </Col>
        <Col sm={10}>
        <div className='maincard'>
        {
        productsData.map((item)=>{
          return(
            <div className='card'>
              <Link to={`/about/${item.id}`}>
              <img src={item.image} alt="" />
              </Link>
              <p>{"Id:"+" "+item.id}</p>
              <p>{"Brand Name:"+" "+item.BrandName}</p>
              <p>{"Product Name:"+" "+item.ProductName}</p>
              <p>{"Price:"+" "+item.Price}</p>
            </div>
          )
        })
        }
        </div>


          <h1>About Page</h1>
        </Col>
      </Row>
    </div>
  )
}

export default About