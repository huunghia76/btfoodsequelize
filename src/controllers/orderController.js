import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
const model = initModels(sequelize)



//tạo order
const addOrder = async (req, res) => {
   const { user_id, orders, code } = req.body

   orders.forEach(async (item) => {
      const { food_id, amount } = item
      await model.orders.create({
         user_id,
         food_id,
         amount,
         code
      })
   })
   res.send('Đã đặt món thành công')
}


export { addOrder }