import Course from '../models/Course.js'

//Create new Course
export const createCourse = async (req, res) => {
   const newCourse = new Course(req.body)

   try {
      const savedCourse = await newCourse.save()

      res.status(200).json({ success: true, message: 'Successfully created', data: savedCourse })
   } catch (error) {
      res.status(500).json({ success: true, message: 'Failed to create. Try again!' })
   }
}

//Update Course
export const updateCourse = async (req, res) => {
   const id = req.params.id

   try {
      const updatedCourse = await Course.findByIdAndUpdate(id, {
         $set: req.body
      }, { new: true })

      res.status(200).json({ success: true, message: 'Successfully updated', data: updatedCourse })
   } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to update' })
   }
}

//Delete Course
export const deleteCourse = async (req, res) => {
   const id = req.params.id

   try {
      await Course.findByIdAndDelete(id)

      res.status(200).json({ success: true, message: 'Successfully deleted' })
   } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to delete' })
   }
}

//Getsingle Course
export const getSingleCourse = async (req, res) => {
   const id = req.params.id

   try {
      const Course = await Course.findById(id).populate('reviews')

      res.status(200).json({ success: true, message: 'Successfully', data: Course })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}

//Get All Course
export const getAllCourse = async (req, res) => {
   //For pagination
   const page = parseInt(req.query.page)

   //console.log(page)

   try {
      const courses = await Course.find({}).populate('reviews').skip(page * 8).limit(8)

      res.status(200).json({ success: true, count: courses.length, message: 'Successfully', data: courses })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}


// Get tour by search
export const getCourseBySearch = async (req, res) => {

   // hear 'i' means case sensitive 
   const city = new RegExp(req.query.city, 'i')
   const distance = parseInt(req.query.distance)
   const maxGroupSize = parseInt(req.query.maxGroupSize)

   try {
      // gte means greater than equal
      const courses= await Course.find({ city, distance: { $gte: distance }, maxGroupSize: { $gte: maxGroupSize } }).populate('reviews')

      res.status(200).json({ success: true, message: 'Successfully', data: courses })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}

//Get featured Course
export const getFeaturedCourse = async (req, res) => {
   //console.log(page)

   try {
      const courses = await Course.find({ featured: true }).populate('reviews').limit(8)

      res.status(200).json({ success: true, message: 'Successfully', data: courses })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}

//Get courses count 
export const getCourseCount = async(req,res) => {
   try {
      const courseCount = await Course.estimatedDocumentCount()

      res.status(200).json({success:true, data:courseCount})
   } catch (error) {
      res.status(500).json({success:false, message: "Failed to fetch"})
   }
}