import { Router } from 'express'
import QuotesController from "../controller/QuotesController"

const quotesRoutes = Router()
const quotesController = new QuotesController

quotesRoutes.post("/", quotesController.create)

export { quotesRoutes }