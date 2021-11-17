import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import User from "../models/user.js"

const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 11;
const TOKEN_KEY = process.env.TOKEN_KEY || "areallylonggoodkey";

const today = new Date();
const exp = Date(today)
exp.setDate(today.getDate() + 30)

export const signUp = async (req, res) => {
  try {
    const { email, username, password } = req.body
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
    const user = new User({
      email,
      username,
      password_digest,
    })
    await user.save();

    const payload = {
      id: user._id,
      email: user.email,
      username: user.username,
      exp: parseInt(exp.getTime() / 1000)
    }

    const token = jwt.sign(payload, TOKEN_KEY)
    res.status(201).json({ token })
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error: error.message })
  }
}

export const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username }).select(
      "username password_digest"
    );
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        exp: parseInt(exp.getTime() / 1000)
      }

      const token = jwt.sign(payload, TOKEN_KEY)
      res.status(201).json({ token })
    } else {
      res.status(401).send("Invalid Credentials")
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      res.json(payload)
    }
  } catch (error) {
    console.log(error.message)
    res.status(401).send("Not Authorized")
  }
}