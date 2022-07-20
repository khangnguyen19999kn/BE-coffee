const jwt = require('jsonwebtoken');
const authorize = (req,res,next) =>{
    // const token = req.header('token')
    // console.log(req.header('Cookie').replace("token=",""))
    const token =req.header('Cookie').replace("token=","");
    console.log(token)
    try {
        const decode = jwt.verify(token,"khang-nguyen-1999")
        if(decode){
            // console.log(["Client"].findIndex((ele)=>ele===decode.level))
            // console.log(decode.level)
            // // res.status(200).send(decode)
            if(["Client"].findIndex((ele)=>ele===decode.level)>-1){
                 next()

            }else res.status(403).send("Bạn không đủ trình")
        }else res.status(401).send("Bạn chưa đăng nhập ")
        
    } catch (error) {
        res.status(401).send("Bạn chưa đăng nhập ")
    }

    

}
module.exports ={
    authorize
}