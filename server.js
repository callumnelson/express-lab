// import modules

import express from 'express'

//Destructure the imported objects
import { nbaTeams } from './data/teams.js'
import { playoffPlayers } from './data/players.js'

// create Express app

const app = express()

// configure the app

app.set('view engine', 'ejs')

// mount Middleware (app.use)


// mount routes

app.get('/', (req, res) => {
  res.redirect('home')
})

app.get('/home', (req, res) => {
  res.render('home')
})

app.get('/teams', (req, res) => {
  res.render('teams/index', {
    teams: nbaTeams,
    players : playoffPlayers
  })
})

app.get('/players', (req, res) => {
  res.render('players/index', {
    players: playoffPlayers
  })
})

app.get('/:team/players', (req, res) => {
  let filteredPlayers = playoffPlayers.filter(player => player.Tm === req.params.team)
  if (filteredPlayers.length){
    res.render('players/oneTeam', {
      teamPlayers : filteredPlayers,
      teamName : req.params.team
    })
  } else res.redirect('/teams')
})

// tell the app to listen on port 3000

app.listen(3000, () => {
  console.log('Listening on port 3000')
})