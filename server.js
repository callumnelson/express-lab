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


// tell the app to listen on port 3000

app.listen(3000, () => {
  console.log('Listening on port 3000')
})