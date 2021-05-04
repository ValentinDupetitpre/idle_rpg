const Character = {

    getAll(req, res){
        return res.status(200).send({'characterAll': 'Toussa'})
    },

    getOne(req, res){
        return res.status(200).send({'galleryOne': 'Voila'})
    }
}

export default Character 