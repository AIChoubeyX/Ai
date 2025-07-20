import express from 'express'
import { auth } from '../middlewares/auth.js';
import { getPulishedCreations, getUserCreations, toggleLikeCreation } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/get-user-creations ', auth,getUserCreations)
userRouter.get('/get-published-creations ', auth,getPulishedCreations)
userRouter.post('/toogle-like-creation ', auth,toggleLikeCreation)

export default userRouter;