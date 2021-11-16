import db from "../db/connection.js"
import User from "../models/user.js"
import Drawing from "../models/drawing.js"
import bcrypt from "bcrypt"

const insertData = async () => {
  await db.dropDatabase()

  const user1 = new User({
    email: "poopyboy@gmail.com",
    username: "poopyboy1",
    password_digest: await bcrypt.hash("!@#%$%@#%@#%55", 11)
  })
  await user1.save()

  const user2 = new User({
    email: "poopygirl@gmail.com",
    username: "poopygirl1",
    password_digest: await bcrypt.hash("!@#%$%@#%@#%55", 11)
  })
  await user2.save()

  const drawings = [
    {
      title: "my drawing",
      image_url: "https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg",
      user_id: "12345"
    },
    {
      title: "another drawing",
      image_url: "https://upload.wikimedia.org/wikipedia/en/5/51/Michael_Jackson_-_Bad.png",
      user_id: "54321"
    }
  ]

  await Drawing.insertMany(drawings)
  console.log("Created drawings and users!")
  db.close()
}

insertData()