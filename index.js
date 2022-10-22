import express from "express";
import cors from "cors";

const app = express();

app.use(
    cors({
        origin: "*",
        methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
    })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("./public"));

import routes from './src/routes/posada.routes.js';
routes(app)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});