import jwt from 'jsonwebtoken'
import * as dotenv from "dotenv"

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '2 days'
  })
}


export default generateToken
