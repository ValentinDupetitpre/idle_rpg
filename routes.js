import express from "express"
import Character from "./src/controllers/character"
const Routes = express.Router()

Routes.get('/', Character.getAll)

Routes.get('/character', Character.getOne)

export default Routes 