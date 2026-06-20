import { connectDatabase, mongoUri } from '../database'
import Activity from '../models/Activity'
import Leaderboard from '../models/Leaderboard'
import Team from '../models/Team'
import User from '../models/User'
import Workout from '../models/Workout'

const runSeed = async () => {
  console.log('Seed the octofit_db database with test data')
  await connectDatabase()
  console.log(`Connected to MongoDB at ${mongoUri}`)

  await Promise.all([
    Activity.deleteMany({}),
    Leaderboard.deleteMany({}),
    Team.deleteMany({}),
    User.deleteMany({}),
    Workout.deleteMany({}),
  ])

  const users = await User.create([
    {
      firstName: 'Ava',
      lastName: 'Reyes',
      email: 'ava.reyes@example.com',
      passwordHash: 'hashedpassword1',
      role: 'athlete',
    },
    {
      firstName: 'Noah',
      lastName: 'Ellis',
      email: 'noah.ellis@example.com',
      passwordHash: 'hashedpassword2',
      role: 'coach',
    },
    {
      firstName: 'Maya',
      lastName: 'Chen',
      email: 'maya.chen@example.com',
      passwordHash: 'hashedpassword3',
      role: 'athlete',
    },
  ])

  const teams = await Team.create([
    {
      name: 'Sunrise Sprinters',
      description: 'A competitive morning running team',
      captainId: users[1]._id,
      memberIds: [users[0]._id, users[2]._id],
    },
    {
      name: 'Strength Squad',
      description: 'Focused on strength and conditioning',
      captainId: users[2]._id,
      memberIds: [users[0]._id],
    },
  ])

  const workouts = await Workout.create([
    {
      name: '5K Tempo Run',
      category: 'Cardio',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      caloriesEstimate: 320,
    },
    {
      name: 'Upper Body Blast',
      category: 'Strength',
      durationMinutes: 45,
      difficulty: 'Advanced',
      caloriesEstimate: 420,
    },
    {
      name: 'Recovery Yoga Flow',
      category: 'Flexibility',
      durationMinutes: 25,
      difficulty: 'Beginner',
      caloriesEstimate: 120,
    },
  ])

  await Activity.create([
    {
      userId: users[0]._id,
      type: 'Run',
      durationMinutes: 32,
      caloriesBurned: 300,
      date: new Date('2026-06-18T07:30:00Z'),
    },
    {
      userId: users[2]._id,
      type: 'Strength Training',
      durationMinutes: 50,
      caloriesBurned: 450,
      date: new Date('2026-06-19T18:00:00Z'),
    },
    {
      userId: users[0]._id,
      type: 'Yoga',
      durationMinutes: 28,
      caloriesBurned: 130,
      date: new Date('2026-06-20T06:00:00Z'),
    },
  ])

  await Leaderboard.create([
    {
      userId: users[0]._id,
      rank: 1,
      points: 1840,
      teamId: teams[0]._id,
    },
    {
      userId: users[2]._id,
      rank: 2,
      points: 1510,
      teamId: teams[1]._id,
    },
    {
      userId: users[1]._id,
      rank: 3,
      points: 1290,
      teamId: teams[0]._id,
    },
  ])

  console.log('Seed data inserted successfully')
  await process.exit(0)
}

runSeed().catch((error) => {
  console.error('Seed failed:', error)
  process.exit(1)
})
