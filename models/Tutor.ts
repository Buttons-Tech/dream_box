import mongoose, { Schema, model, models } from 'mongoose';

const TutorSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  // This array stores the skills selected in your Step 2
  expertise: [{ type: String }], 
  experience: { type: String },
  resumeUrl: { type: String }, // Link to their uploaded file
  status: { type: String, default: 'pending' }, // pending, approved, or rejected
  createdAt: { type: Date, default: Date.now },
});

// This prevents Mongoose from creating the model twice during Next.js hot-reloading
const Tutor = models.Tutor || model('Tutor', TutorSchema);
export default Tutor;