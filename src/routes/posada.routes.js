import { create, findAll, generateExcel } from "../controllers/posada.controller.js";
import routers from "express";

const routes = app => {
    const router = routers.Router()
  
    router.post("/", create);
  
    router.get("/", findAll);

    router.get("/excel", generateExcel);

    app.use('/api/posada', router);
};

export default routes;