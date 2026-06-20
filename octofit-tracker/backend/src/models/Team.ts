import mongoose, { Document, Schema } from 'mongoose'

export interface ITeam extends Document {
  name: string
  description: string
  captainId: mongoose.Types.ObjectId
  memberIds: mongoose.Types.ObjectId[]
  createdAt: Date
}

const TeamSchema = new Schema<ITeam>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    captainId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    memberIds: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: { createdAt: true, updatedAt: false } }
)

const Team = mongoose.model<ITeam>('Team', TeamSchema)
export default Team
