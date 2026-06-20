/* Database connection for OctoFit Tracker
   - Connects to MongoDB database `octofit_db`
   - Exposes `mongoUri`, `connectDatabase`, and default mongoose export
*/

import mongoose from 'mongoose'

export const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db'

export const connectDatabase = async () => {
  return mongoose.connect(mongoUri)
}

// backward-compatible alias
export const connectDb = connectDatabase

export default mongoose
