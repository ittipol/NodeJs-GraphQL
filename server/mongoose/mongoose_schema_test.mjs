import { model, Schema } from "mongoose";

const testSchema = new Schema({
    name: String,
    firstName: String,
    lastname: String,
    age: Number
})

export default model("TestSchema", testSchema) 