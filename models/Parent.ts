// src/models/Parent.ts

import mongoose, { Model, Schema } from "mongoose";

export interface IParent extends Document {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  students: {
    firstName: string;
    age: number;
    interest: 'Coding' | 'Robotics' | 'Academic' | 'Special Needs';
    notes?: string;
  }[];
  // --- ADD THESE NEW FIELDS ---
  paymentStatus: 'Pending' | 'Paid' | 'Failed';
  transactionId?: string; // The ? makes it optional since it's empty until they pay
  createdAt: Date;
}

const ParentSchema = new Schema<IParent>({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  children: [{
    firstName: { type: String, required: true },
    age: { type: Number, required: true },
    interest: { type: String, enum: ['Coding', 'Robotics', 'Academic', 'Special Needs'], required: true },
    notes: { type: String }
  }],
  // --- ADD THESE TO THE SCHEMA ---
  paymentStatus: { 
    type: String, 
    enum: ['Pending', 'Paid', 'Failed'], 
    default: 'Pending' 
  },
  transactionId: { type: String },
  createdAt: { type: Date, default: Date.now },
});
const Parent: Model<IParent> = mongoose.models.Parent || mongoose.model<IParent>('Parent', ParentSchema);
export default Parent;