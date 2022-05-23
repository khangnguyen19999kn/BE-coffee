const { User } = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')


const register = async (req, res) => {
    const { name, phoneNumber, address, password, birthDay } = req.body;
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt)
        const user = await User.create({ name, phoneNumber, address, password: hashPassword, birthDay, level: "Client" })
        res.status(201).send(user)

    } catch (error) {
        res.status(500).send(error)

    }

}
const login = async (req, res) => {
    const { phoneNumber, password, level } = req.body
    const user = await User.findOne({
        where: {
            phoneNumber,
        },
    })
    if (user && user.level===level) {
        const check = bcrypt.compareSync(password, user.password)

        if (check) {
            const token = jwt.sign({ phoneNumber: user.phoneNumber,name:user.name }, "khang-nguyen-1999", { expiresIn: 60 * 60 })
             
            res.status(200).send({ messenger: "Thành công", token })
        }
        else res.status(500).send("Mật khẩu không đúng")
    } else res.status(404).send("Sđt chưa được đăng ký")



}
const checkPhoneNumber = async (req, res) => {
    const { phoneNumber } = req.body;
    const user = await User.findOne({
        where: {
            phoneNumber,
        },
    })

    if (user) res.status(200).send(true)
    else res.status(200).send(false)


}


const decodeToken = (req,res)=>{
   const {token} = req.body;
    const decode = jwt.verify(token,"khang-nguyen-1999");
    if(decode) {
        res.status(200).send(decode);
        // console.log(decode)
    }
    else res.status(404).send("Không có token vui lòng đăng nhập")
   

}
module.exports = {
    register, login, checkPhoneNumber,decodeToken
}