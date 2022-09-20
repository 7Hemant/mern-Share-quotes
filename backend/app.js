import Express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";

//files import
import connectedDB from "./config/db.js";
import UserPostRouter from "./routes/private/UserPost.js";
import userAuth from "./routes/public/UserAuth.js";
import publicRoutes from "./routes/public/Public.js";
import adminRoute from "./routes/private/Admin.js";
import { ErrorHandler } from "./middleware/ErrorMiddleware.js";
dotenv.config();
const app = Express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1", UserPostRouter);
app.use("/api/v1", userAuth);
app.use("/api/v1", publicRoutes);
app.use("/api/v1", adminRoute);
app.use(ErrorHandler);
connectedDB().then(
  app.listen(5000, () =>
    console.log(`server is running on port ${process.env.PORT}`)
  )
);
