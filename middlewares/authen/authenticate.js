const jwt = require('jsonwebtoken');

const authen =(req,res,next)=>{
    const token = req.header("token");
    const decode =jwt.verify(token, "khang-nguyen-1999");
    console.log(decode)
}
module.exports = {
    authen
}