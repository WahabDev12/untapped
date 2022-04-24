import jwt from 'jsonwebtoken'
const JWT_SECRET = 'OnePiece'

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: '2 days'
  })
}

export default generateToken
