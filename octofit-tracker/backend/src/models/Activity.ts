import mongoose, { Document, Schema } from 'mongoose'

export interface IActivity extends Document {
  userId: mongoose.Types.ObjectId
  type: string
  durationMinutes: number
  caloriesBurned: number
  date: Date
}

const ActivitySchema = new Schema<IActivity>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  { timestamps: true }
)

const Activity = mongoose.model<IActivity>('Activity', ActivitySchema)
export default Activity
