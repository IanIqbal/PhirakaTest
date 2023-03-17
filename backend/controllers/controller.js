const {User} = require("../models")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
class Controller{
    static  async register(req, res, next){
        try {
            const {Username, Password} = req.body


            const user = await User.create({Username, Password})

            res.status(200).json({message:`Success create user id ${user.id}`})
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next){
        try {
            const {Username, Password} = req.body

            if(!Username || !Password){
                throw {name:"Invalid Input", message:"Username and Password cannot be empty"}
            }

            const user = await User.findOne({where:{Username}})
            
            if(!user){
                throw {name:"Invalid Input", message:"Invalid Username or Password"}
            }

            const passwordCheck = bcrypt.compareSync(Password, user.Password)

            if(!passwordCheck){
                throw {name:"Invalid Input", message:"Invalid Username or Password"}
            }

            const access_token = jwt.sign({userId: user.id}, "SECRET")

            res.status(200).json({access_token})
        } catch (error) {
            next(error)
        }
    }

    static async getUsers(req, res, next){
        try {
            
            const users = await User.findAll()

            res.status(200).json({users})
        } catch (error) {
            next(error)
        }
    }

    static async deleteUser(req, res, next){
        try {
            const {id} = req.params


            const user = await User.findByPk(id)

            if(!user){
                throw{name:"Not Found"}
            }

             await User.destroy({where:{id}})
            res.status(200).json({message:`Success delete user id ${id}`})

        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async editUser(req, res, next){
        try {
            const {id} = req.params
            let {Username} = req.body

            const user = await User.findByPk(id)

            if(!user){
                throw{name:"Not Found"}
            }
            await User.update({Username}, {where:{id}})


            res.status(200).json({message:`Success edit user id ${id}`})
        } catch (error) {
            next(error)
        }
    }

    static async getUser (req,res,next){
        try {
            const {id} = req.params

            const user = await User.findByPk(id)

            if(!user){
                throw {name:"Not Found"}
            }

            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller