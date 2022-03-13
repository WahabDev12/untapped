const jwt = require('jsonwebtoken')
const config = require('config')
const jwtToken = "OnePiece"


module.exports = async function(req,res,next){
    const token = req.header('auth-token')
    if(!token){
        res.status(401).json({msg:'No token, authorization denied'})
    }

    try{
        //check token
        const decoded = jwt.verify(token,jwtToken)
        req.user = decoded.user
        if(!req.user.isUser){
            return res.status(403).json({msg:"Access Denied"})
        }
        next();
    }
    catch(error){
        res.status(401).json({msg:'Token is not valid'})
    }
}