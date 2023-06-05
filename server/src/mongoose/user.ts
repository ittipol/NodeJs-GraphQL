import { model, Schema } from "mongoose";

const User = new Schema({
    firstname: String,
    lastname: String,
    age: Number
})

export default model("User", User) 