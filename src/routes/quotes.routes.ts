import { Router } from 'express'
import QuotesController from "../controller/QuotesController"

const quotesRoutes = Router()
const quotesController = new QuotesController

quotesRoutes.post("/", quotesController.create)
quotesRoutes.get("/", quotesController.index)
quotesRoutes.get("/:id", quotesController.show)
quotesRoutes.put("/:id", quotesController.update)
quotesRoutes.delete("/:id", quotesController.delete)

export { quotesRoutes }