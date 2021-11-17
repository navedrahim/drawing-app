import mongoose from 'mongoose';
const Schema = mongoose.Schema

const Drawing = new Schema(
  {
    title: { type: String, required: true },
    image_url: { type: String, required: true },
    user_id: { type: String, required: true }
  },
  { timestamps: true }
)

export default mongoose.model('drawings', Drawing)