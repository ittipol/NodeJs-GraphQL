import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    age: Number
})

export default model("UserSchema", UserSchema) 