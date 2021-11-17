import app from "./app.js"
import db from "./db/connection.js"

const PORT = process.env.PORT || 3000

db.on("connected", () => {
  console.log("Connected to MongoDB")
  app.listen(PORT, () => 
    console.log(`Express server application running on ${PORT}`)
  )
})