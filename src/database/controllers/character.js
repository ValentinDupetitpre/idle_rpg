import database from '../models'

export default Character ={
    findOne(req, res){
        return database.character
        .findOne()
    }
}

export default Character