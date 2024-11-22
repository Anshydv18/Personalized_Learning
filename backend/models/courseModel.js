import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    course_id: {
      type: Number,
      required: true,
    },
    course_name: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Task", courseSchema);
