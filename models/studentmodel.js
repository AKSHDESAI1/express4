import mongoose from "mongoose";

//Define Schema
const studentSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 60 },
    fees: {
        type: mongoose.Decimal128, required: true, validate: (v) => {
            return v >= 5000.50
        }
    }
});

//Compile Schema
const studentModel = new mongoose.model("Student", studentSchema);

export default studentModel;