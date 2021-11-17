import express from "express"
import logger from "morgan"
import cors from "cors"

import drawingRoutes from "./routes/drawings.js"
import userRoutes from "./routes/users.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger("dev"))

app.use("/api", drawingRoutes)
app.use("/api", userRoutes)

export default app