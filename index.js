import express from "express";
import "dotenv/config";
import router from "./routes/userRouter.js";
import connectDB from "./setupt/dbConnection.js";

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(express.json());

app.use("/user", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
