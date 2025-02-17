import mongoose from "mongoose";
import { title } from "process";

const collectionSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  description: String,
  image: {
    type: String,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Collection =
  mongoose.models.Collection || mongoose.model("Collection", collectionSchema);

export default Collection;
