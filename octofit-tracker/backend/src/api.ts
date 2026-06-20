import { Router } from 'express'
import Activity from './models/Activity'
import Leaderboard from './models/Leaderboard'
import Team from './models/Team'
import User from './models/User'
import Workout from './models/Workout'

const router = Router()

router.get('/users', async (_req, res) => {
  const users = await User.find().lean().exec()
  res.json({
    message: 'OctoFit Tracker users endpoint',
    users,
  })
})

router.get('/teams', async (_req, res) => {
  const teams = await Team.find().populate('captainId memberIds').lean().exec()
  res.json({
    message: 'OctoFit Tracker teams endpoint',
    teams,
  })
})

router.get('/activities', async (_req, res) => {
  const activities = await Activity.find().populate('userId').lean().exec()
  res.json({
    message: 'OctoFit Tracker activities endpoint',
    activities,
  })
})

router.get('/leaderboard', async (_req, res) => {
  const leaderboard = await Leaderboard.find().populate('userId teamId').lean().exec()
  res.json({
    message: 'OctoFit Tracker leaderboard endpoint',
    leaderboard,
  })
})

router.get('/workouts', async (_req, res) => {
  const workouts = await Workout.find().lean().exec()
  res.json({
    message: 'OctoFit Tracker workouts endpoint',
    workouts,
  })
})

export default router
