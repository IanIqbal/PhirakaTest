const errorHandler = (err, req, res, next) =>{
    let status = 500
    let message = "Internal Server Error"
    console.log(err.name);
    switch (err.name) {
        case "SequelizeValidationError":
            status = 400
            message= err.errors[0].message
            break;
        
        case "Invalid Input":
            status = 400
            message = err.message
            break;

        case "unauthorized":
            status = 401
            message = "Please Login First"
            break;

        case "Not Found":
            status= 404
            message = "User not found"

            break;
        default:
            break;
    }

    res.status(status).json({message})
} 


module.exports = errorHandler