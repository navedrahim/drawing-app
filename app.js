import express from "express"
import logger from "morgan"
import cors from "cors"

import drawingRoutes from "./routes/drawings.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger("dev"))

app.use("/api", drawingRoutes)

export default app