import mongoose, { Document, Schema } from 'mongoose'

export interface IWorkout extends Document {
  name: string
  category: string
  durationMinutes: number
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  caloriesEstimate: number
}

const WorkoutSchema = new Schema<IWorkout>(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    difficulty: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      required: true,
    },
    caloriesEstimate: { type: Number, required: true },
  },
  { timestamps: true }
)

const Workout = mongoose.model<IWorkout>('Workout', WorkoutSchema)
export default Workout
