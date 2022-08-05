import  express  from "express";
import { routes } from "./routes";
require("express-async-errors")
require("dotenv/config")
import AppError from "./utils/AppError"


const app = express();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }
      return response.status(500).json({
        status: "error",
        message: "Internal server error"
      })
})

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


