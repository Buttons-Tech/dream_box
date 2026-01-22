import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IParent extends Document {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  children: {
    firstName: string;
    age: number;
    interest: 'Coding' | 'Robotics' | 'Academic' | 'Special Needs';
    notes?: string;
  }[];
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
  createdAt: { type: Date, default: Date.now },
});

const Parent: Model<IParent> = mongoose.models.Parent || mongoose.model<IParent>('Parent', ParentSchema);
export default Parent;