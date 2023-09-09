"use client"
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'


export default function Home() {
  return (
      <Container fluid className='bg-danger'>
        <Row>
          <Col md={6} className='bg-green-700'>
          <h1 className='text-red-600 text-center'>This is the left side</h1>
             
          </Col>
          <Col md={6}>
          <h1 className='text-green-700 text-center'>This is the right side</h1>
          </Col>
        </Row>
      </Container>
  )
}
