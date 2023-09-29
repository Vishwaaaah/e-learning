import Booking from '../models/Purchase.js'


// create new booking
export const createPurchase = async(req,res) => {
   const newPurchase = new Purchase(req.body)

   try {
      const savedPurchase = await newPurchase.save()

      res.status(200).json({success:true, message:"You've successfull bought the course!", data:savedPurchase})
   } catch (error) {
      res.status(500).json({success:true, message:"Internal server error!"})
   }
}

// get single booking
export const getPurchase = async(req,res) => {
   const id = req.params.id
   
   try {
      const book = await Purchase.findById(id)

      res.status(200).json({success:true, message:"Successful!", data:book})
   } catch (error) {
      res.status(404).json({success:true, message:"Not Found!"})
   }
} 


// get all booking
export const getAllPurchase = async(req,res) => {
   
   try {
      const books = await Purchase.find()

      res.status(200).json({success:true, message:"Successful!", data:books})
   } catch (error) {
      res.status(500).json({success:true, message:"Internal server error!"})
   }
} 