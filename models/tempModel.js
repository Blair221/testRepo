const mongoose = require("mongoose");
const {Schema} = mongoose;

const tempSchema = new Schema({
    temp: Number,
    moisture: Number
})

module.exports = mongoose.model("Temp", tempSchema);