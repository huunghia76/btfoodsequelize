import sequelize from "../models/connect.js"
import initModels from '../models/init-models.js'
let model = initModels(sequelize)



//xử lý like/ unlike 
const getUserLike = async (req, res) => {
    const { user_id, res_id } = req.body
    let check = await model.like_res.findOne(
        {
            where: {
                user_id,
                res_id
            }
        }
    )
    if (!check) {
        await model.like_res.create({
            user_id,
            res_id
        })
        res.send('đã like')
    }
    else {
        await model.like_res.destroy({
            where: {
                user_id,
                res_id
            }
        })
        res.send('đã unlike')
    }
}

//lấy danh sách người like theo nhà hàng (dùng params )
const likeRes = async (req, res) => {
    const { res_id } = req.params
    const likedRes = await model.like_res.findAll({
        where: {
            res_id
        }
    })
    res.send(likedRes)
}

//lấy danh sách nhà hàng đã like theo user (dùng params) 
const likeUser = async (request, res) => {
    const user_id = request.query.user_id
    const likedRes = await model.like_res.findAll({
        where: {
            user_id
        }
    })
    res.send(likedRes)
}


export { getUserLike, likeRes, likeUser }