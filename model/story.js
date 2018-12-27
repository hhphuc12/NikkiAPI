"use strict";

const { mongoose } = require('../config');
const paginate = require("mongoose-paginate");

const StorySchema = new mongoose.Schema({
    content: { type: String, required: true },
    isDeleted: { type: Boolean },
    updatedAt: { type: Date },
}, { timestamps: true });

StorySchema.plugin(paginate);
module.exports = mongoose.model('Story', StorySchema);
