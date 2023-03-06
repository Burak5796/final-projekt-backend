import express from "express";
import { postOne, getCity, getAll } from "./controller.js";



const router = express.Router();


router
    .route('/details/:city')
    .get(getCity)

router
    .route('/')
    .post(postOne)
    .get(getAll)


export default router;