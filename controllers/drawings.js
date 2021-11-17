import Drawing from "../models/drawing.js";

export const getDrawings = async (req, res) => {
  try {
    const drawings = await Drawing.find();
    res.json(drawings);
  } catch(error) {
    console.log(error.message);
    res.status(500).json({ error: error.message })
  }
}

export const getDrawing = async (req, res) => {
  try {
    const { id } = req.params;
    const drawing = await Drawing.findById(id).populate("user_id");
    if (drawing) {
      return res.json(drawing)
    }
    res.status(404).json({ message: "Drawing not found" })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message })
  }
}

export const createDrawing = async (req, res) => {
  try {
    const newDrawing = new Drawing(req.body)
    await newDrawing.save()
    res.status(201).json(newDrawing)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const updateDrawing = async (req, res) => {
  try {
    const { id } = req.params
    const drawing = await Drawing.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json(drawing)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const deleteDrawing = async (req, res) => {
  try {
    const { id } =  req.params
    const deletedDrawing = await Drawing.findByIdAndDelete(id)
    if (deletedDrawing) {
      return res.status(200).send("Drawing deleted")
    }
    throw new Error("Drawing not found")
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}