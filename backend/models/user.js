import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 99,
    validate: {
      validator: Number.isInteger,
      message: (props) => `${props.value} is not an integer value`,
    },
  },
  email: {
    type: String,
    required: true,
    minLength: 10,
    unique: true,
    lowercase: true,
  },
  createdAt: { type: Date, immutable: true, default: Date.now },
  editedAt: { type: Date, default: Date.now },
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  ],
});

const User = mongoose.model("user", userSchema);

export default User;
