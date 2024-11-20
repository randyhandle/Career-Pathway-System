import express, { request } from "express";

const router = express.Router();
const app = express();

router.get('/', (request,response) => {
    console.log(request);
    return response.status(234).send("Hello World!");
})

export default router;