import express from "express";
import { addRate, rateByUser, userLiked } from "../controllers/rateController.js";



const rateRoute = express.Router()

rateRoute.post("/rating", addRate)
//lấy danh sách nhà hàng được đánh giá theo người dùng
rateRoute.get("/user-rate/:user_id", rateByUser)

//lấy danh sách người dùng đã đánh giá nhà hàng
rateRoute.get("/res-rated/:res_id",userLiked)

export default rateRoute