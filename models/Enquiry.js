import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  countryCode: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  dateOfTravel: { type: String, required: true },
  numberOfPeople: { type: Number, required: true },
  hotelCategory: { type: String, required: true },
  numberOfChildren: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

// ✅ Prevent model overwrite during Next.js hot reload
const Enquiry =
  mongoose.models.Enquiry || mongoose.model("Enquiry", EnquirySchema);

export default Enquiry;
