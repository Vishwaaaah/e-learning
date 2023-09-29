import express from 'express'
import { createCourse, deleteCourse, getAllCourse, getFeaturedCourse, getSingleCourse, getCourseBySearch, getCourseCount, updateCourse } from '../Controllers/courseControllers.js'

import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//Create new Course 
router.post('/', verifyAdmin, createCourse)

//Update Course 
router.put('/:id', verifyAdmin, updateCourse)

//Delete Course 
router.delete('/:id', verifyAdmin, deleteCourse)

//Get single Course 
router.get('/:id', getSingleCourse)

//Get all Course 
router.get('/', getAllCourse)

//Get Course by search
router.get("/search/getCourseBySearch", getCourseBySearch)
router.get("/search/getFeaturedCourse", getFeaturedCourse)
router.get("/search/getCourseCount", getCourseCount)




export default router