import mongoose, { Document, Schema } from 'mongoose'

export interface ILeaderboardEntry extends Document {
  userId: mongoose.Types.ObjectId
  rank: number
  points: number
  teamId?: mongoose.Types.ObjectId
  updatedAt: Date
}

const LeaderboardSchema = new Schema<ILeaderboardEntry>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    rank: { type: Number, required: true },
    points: { type: Number, required: true },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team' },
  },
  { timestamps: { createdAt: false, updatedAt: true } }
)

const Leaderboard = mongoose.model<ILeaderboardEntry>('Leaderboard', LeaderboardSchema)
export default Leaderboard
