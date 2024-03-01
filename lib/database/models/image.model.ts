import { Document, Schema, model, models } from "mongoose";

export interface Image extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureURL: string;
  width?: number;
  height?: number;
  config?: object;
  transformationURL?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const ImageSchema = new Schema<Image>({
  title: {
    type: String,
    required: true,
  },
  transformationType: {
    type: String,
    required: true,
  },

  publicId: {
    type: String,
    required: true,
  },
  secureURL: {
    type: String,
    required: true,
  },
  prompt: {
    type: String,
  },
  config: {
    type: Object,
  },

  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  transformationURL: {
    type: String,
  },
  aspectRatio: {
    type: String,
  },
  color: {
    type: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
