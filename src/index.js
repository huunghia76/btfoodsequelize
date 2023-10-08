import express from 'express';
import cors from 'cors';
import rootRouter from './routes/rootRouter.js';

const app =express()
app.use(express.json())
app.use(cors())
app.listen(8020)


app.use(rootRouter) 



