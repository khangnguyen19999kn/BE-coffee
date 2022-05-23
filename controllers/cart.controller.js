const { cartOrder } = require('../models')
const {deltailOrder} = require('../models')

const createOrder = async (req, res) => {
    // const { fullName, phone, huongDan, diaChi, thanhToan } = req.body;
    const {fullname,phone,HuongDan,address} = req.body
    const {listOrder} = req.body;
    
    try {
        const newOrder= await cartOrder.create({fullName:fullname, phone, huongDan:HuongDan, diaChi:address, thanhToan:"Rồi"  })
       const {id} = newOrder;
       const codeOrder=id
        for(const item of listOrder){
            const {id,name,note,size_product,quantity,resultPrice}=item;
            const newdetail= await deltailOrder.create({codeOrder:codeOrder,idSP:id,name,note,size_product,quantity,resultPrice})
            
        }
       
        res.status(201).send("Thành công")
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports={

    createOrder,
}
