import mongoose, { Document, Schema } from 'mongoose'

export interface IUser extends Document {
  firstName: string
  lastName: string
  email: string
  passwordHash: string
  role: 'athlete' | 'coach' | 'admin'
  teamId?: mongoose.Types.ObjectId
  createdAt: Date
}

const UserSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ['athlete', 'coach', 'admin'], required: true },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team' },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
)

const User = mongoose.model<IUser>('User', UserSchema)
export default User
