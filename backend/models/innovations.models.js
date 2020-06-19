const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InnovationSchema = new Schema({});

const Innovation = mongoose.model("Innovations", InnovationSchema);
module.exports = Innovation;
