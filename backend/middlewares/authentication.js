const jwt = require("jsonwebtoken")
const {User} = require("../models")
const authentication = async (req, res, next)=>{
    try {
        
        if(!req.headers.access_token){
            throw {name:"unauthorized"}
        }

        const {userId} = jwt.verify(req.headers.access_token, "SECRET")  

        const user = await User.findByPk(userId)

        if(!user){
            throw {name:"unauthorized"}
        }

        req.user = {userId : user.id}

        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authentication