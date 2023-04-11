// import modules

import express from 'express'

//Destructure the imported objects
import { nbaTeams } from './data/teams.js'
import { playerStats } from './data/players.js'

// create Express app

const app = express()

// configure the app

app.set('view engine', 'ejs')

// mount Middleware (app.use)


// mount routes

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/home', (req, res) => {
  res.redirect('/')
})

app.get('/teams', (req, res) => {
  res.render('teams/index', {
    teams: nbaTeams
  })
})

app.get('/players', (req, res) => {
  res.render('players/index', {
    players: playerStats
  })
})

app.get('/players/:team', (req, res) => {
  let filteredPlayers = playerStats.filter(player => player.Tm === req.params.team)
  res.render('players/oneTeam', {
    teamPlayers : filteredPlayers,
    teamName : req.params.team
  })
})

// tell the app to listen on port 3000

app.listen(3000, () => {
  console.log('Listening on port 3000')
})