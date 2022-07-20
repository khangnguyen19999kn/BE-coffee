const { User } = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')


const register = async (req, res) => {
    const { name, phoneNumber, address, password, birthDay,level } = req.body;
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt)
        const user = await User.create({ name, phoneNumber, address, password: hashPassword, birthDay, level: level})
        res.status(201).send(user)

    } catch (error) {
        res.status(500).send(error)

    }

}
const login = async (req, res) => {
    let date = new Date();
    const { phoneNumber, password, level } = req.body
    const user = await User.findOne({
        where: {
            phoneNumber,
        },
    })
    if (user && user.level === level) {
        const check = bcrypt.compareSync(password, user.password)

        if (check) {
            
            
            let exp_token = date.getTime();
          
            const token = jwt.sign({ phoneNumber: user.phoneNumber, name: user.name, level: user.level,exp_token:exp_token }, "khang-nguyen-1999", { expiresIn: 60 * 30 })
            res.cookie('token', token)

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


const decodeToken = (req, res) => {
    const { token } = req.body;
    const decode = jwt.verify(token, "khang-nguyen-1999");
    if (decode) {
        let date = new Date();
    
        const {exp_token}= decode;
       
        // console.log()
        if(date.getTime()-exp_token>60000){
            res.status(401).send("Cookie quá date vui lòng đăng nhập lại")
        }
        else {
            if(["Client"].findIndex((ele)=>ele===decode.level)>-1){
                res.status(200).send(decode);

            }else res.status(403).send("Bạn không đủ trình")

        }
       
    }
    else res.status(401).send("Không có token vui lòng đăng nhập")


}
//CRUD USers
const getAllUsers =async (req, res)=> {
    try {
       const listUsers=await User.findAll();
       
       res.status(200).send(listUsers)
    } catch (error) {
        res.status(500).send(error)
    }
}
const updateUser = async (req,res) =>{
    const {id} = req.params;
    const { name, phoneNumber, address, birthDay,level } = req.body;
    try {
        const detailUSer = await User.findOne({
            where:{
                id,
            }
        });
        detailUSer.name=name;
        detailUSer.phoneNumber=phoneNumber;
        detailUSer.address=address;
        detailUSer.birthDay=birthDay;
        detailUSer.level=level;
        

        await detailUSer.save();
        res.status(200).send("Update success")
    } catch (error) {
        res.status(500).send(error)
    }
}
const deleteUser = async (req,res)=>{
    const {id} = req.params;
    try {
        await User.destroy({
            where:{
                id
            }
        })
        res.status(200).send("Xóa thành công")
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports = {
    register, login, checkPhoneNumber, decodeToken,getAllUsers,deleteUser,updateUser
}