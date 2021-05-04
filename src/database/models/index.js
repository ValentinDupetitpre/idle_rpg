import Sequelize from 'sequelize'
import configJSON from '../config/config.js'

import userModel from './user'
import characterModel from './character'

const env = process.env.NODE_ENV || 'development'
const config = configJSON[env]

const sequelize = new Sequelize(config.database, config.username, config.password, config)

const database = {
  user: userModel(sequelize, Sequelize.DataTypes),
  character: characterModel(sequelize, Sequelize.DataTypes)
}
 
database.user.hasMany(database.character, { as: "users" })
database.character.belongsTo(database.user, {
  foreignKey: "user_id",
  as: "user",
})


Object.keys(database).forEach(modelName => {
  if ('associate' in database[modelName]) {
    database[modelName].associate(database)
  }
})

database.sequelize = sequelize
database.Sequelize = Sequelize

export default database
