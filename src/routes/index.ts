import { Router } from 'express'
import  { quotesRoutes } from "./quotes.routes"

const routes = Router()
routes.use("/quotes", quotesRoutes)

export { routes }