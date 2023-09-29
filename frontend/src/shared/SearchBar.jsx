import React, { useRef } from 'react'
import './search-bar.css'
import { Col, Form, FormGroup } from 'reactstrap'
import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
   const courseRef = useRef('')
   const navigate = useNavigate()

   const searchHandler = async() => {
      const location = courseRef.current.value()
     
      if (location === '' ) {
         return alert('required field!')
      }

      const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}`)
      
      if(!res.ok) alert('Something went wrong')

      const result = await res.json()

      navigate(`/tours/search?city=${location}`)
   }

   return <Col lg="12">
      <div className="search__bar">
         <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
               <span><i class='ri-map-pin-line'></i></span>
               <div>
                  <h6>Search Courses</h6>
                  <input type="text" placeholder='What do you want to learn?' ref={courseRef} />
               </div>
            </FormGroup>
          
            <span className='search__icon' type='submit' onClick={searchHandler}>
               <i class='ri-search-line'></i>
            </span>
         </Form>
      </div>
   </Col>
}

export default SearchBar