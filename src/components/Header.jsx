import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice';


function Header() {

  const dispatch = useDispatch()

  return (
    <Navbar variant='dark' className='p-3'>
        <Container>
          <Navbar.Brand href="" className='d-flex'>
            <img
              alt=""
              src="https://www.pngall.com/wp-content/uploads/8/Restaurant-Logo.png"
              width="50"
              height="55"
              className="d-inline-block align-top"
            />{' '}
          <h4 className='mt-3 ms-4'>  <span className='text-warning'>Food </span>Circle</h4>
          </Navbar.Brand>
          <input onChange={(e)=>dispatch(search(e.target.value))} type="text" placeholder='Enter Neighbourhood' className='form-control w-25' />
        </Container>
      </Navbar>
  )
}

export default Header