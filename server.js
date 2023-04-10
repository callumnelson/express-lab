// import modules

import express from 'express'
//Destructure the imported object
import { nbaTeams } from './data/teams.js'

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
  res.send('<h1>Welcome to the teams page</h1>')
})

app.get('/players', (req, res) => {
  res.send('<h1>Welcome to the players page</h1>')
})

// tell the app to listen on port 3000

app.listen(3000, () => {
  console.log('Listening on port 3000')
})