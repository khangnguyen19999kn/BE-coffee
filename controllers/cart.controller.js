const { cartOrder } = require('../models')
const {deltailOrder} = require('../models')

const createOrder = async (req, res) => {
    // const { fullName, phone, huongDan, diaChi, thanhToan } = req.body;
    const {fullname,phone,HuongDan,address} = req.body
    const {listOrder} = req.body;
    
    try {
        const newOrder= await cartOrder.create({fullName:fullname, phone, huongDan:HuongDan, diaChi:address, thanhToan:"Chưa"  })
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
const getAllOrder =async (req,res)=>{
    try {
        const listOrder=await cartOrder.findAll();
        
        res.status(200).send(listOrder)
     } catch (error) {
         res.status(500).send(error)
     }
}
const getDetailOrder = async (req,res)=>{
    const {id} =req.params;
    try {
        const detail = await deltailOrder.findAll({
            where:{
                codeOrder:id,
            }
        })
        res.status(200).send(detail)
    } catch (error) {
        res.status(500).send(error)
    }


}
const changeStatusorder = async (req,res)=>{
    const {id}= req.params;
    try {
        const detailOrder =cartOrder.update({ thanhToan: "Rồi" }, {
            where: {
              id
            }
          });
      
        res.status(200).send("Update success")
        
    } catch (error) {
        res.status(500).send(error)
    }
}
// Khi xóa đơn hàng sẽ xóa luôn cả chi tiết đơn hàng
const deleteOrder = async (req,res)=>{
    const {id} = req.params;
    try {
        await cartOrder.destroy({
            where:{
                id
            }
        })
        await deltailOrder.destroy({
            where:{
                codeOrder:id
            }
        })
        res.status(200).send("Xóa thành công")
    } catch (error) {
        res.status(500).send(error)
    }

}

module.exports={

    createOrder,getAllOrder,getDetailOrder,changeStatusorder,deleteOrder
}
