import express from "express"
import 'dotenv/config';
import Routes from "../routes"

import database from './database/models'


const app = express()

app.use('/', Routes)

database.sequelize.sync().then(() => {
  app.listen(() => {
      console.log(`DB running and server running on http://localhost:${process.env.PORT}`)
  })
})