import React from 'react'
import CourseCard from '../../shared/CourseCard'
// import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'

const FeaturedCourseList = () => {
   const {data: featuredCourses, loading, error} = useFetch(`${BASE_URL}/courses/search/getFeaturedCourse`)
   // console.log(featuredCourses)

   return (
      <>
         { loading && <h4>Loading.....</h4> }
         { error && <h4>{error}</h4> }
         {
            !loading && !error &&
            featuredCourses?.map(course => (
               <Col lg='3' md='4' sm='6' className='mb-4' key={course._id}>
                  <CourseCard course={course} />
               </Col>
            ))
         }
      </>
   )
}

export default FeaturedCourseList 