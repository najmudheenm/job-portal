const jwt = require('jsonwebtoken');

const generateTocken = (id) =>{
    return jwt.sign({id},process.env.ACCESS_TOCKEN,{
        expiresIn:"30d",
    })
}



module.exports = generateTocken;
