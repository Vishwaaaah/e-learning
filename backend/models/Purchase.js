import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema(
   {
      userId: {
         type: String
      },
      userEmail: {
         type: String
      },
      courseName: {
         type: String,
         required: true,
      },
      fullName: {
         type: String,
         required: true,
      },
     
      phone: {
         type: Number,
         required: true
      },
      dateOfPurchase: {
         type: Date,
         required: true
      },
   },
   { timestamps: true }
);

export default mongoose.model("Purchase", purchaseSchema);
