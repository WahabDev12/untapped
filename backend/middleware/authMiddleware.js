import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
const JWT_SECRET = "OnePiece";
import Group from '../models/groupModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization && req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');

      next()
    } 
    catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } 
  else {
    res.status(401)
    throw new Error('Not authorized as an admin')
  }
}

const groupAdmin = async (req,res,next) => {
    try{
      const group_id = req.params.id;
      const user = req.user;
      const group = await Group.findById(group_id).
      populate('group_admin_id', '_id firstName lastName')

      if(group.group_admin_id._id.toString() === user._id.toString()){
          req.group = group
          return next()
      }
      res.status(400).send("You are not the group's admin")

    }
    catch(error){
        res.status(400).send(error.message);
    }
}

export { protect, admin, groupAdmin }
