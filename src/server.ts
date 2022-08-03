import  express  from "express";
import { routes } from "./routes";
require("express-async-errors")
import AppError from "./utils/AppError"

const app = express();

app.use(express.json());
app.use(routes)

const PORT = 3334;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


