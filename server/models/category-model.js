'use strict';

const mongoose = require('mongoose'),
    crypto = require('crypto'),
    uniqueValidator = require('mongoose-unique-validator'),
    Schema = mongoose.Schema;

const ALPHA_PATTERN = /^[A-Za-zА-Яа-я0-9]+$/;

let CategorySchema = new Schema({
    _creator: String,
    name: {
        type: String,
        required: true,
        minLength: [3, 'Username is too short!'],
        maxLength: [50, 'Username is too long!'],
        match: ALPHA_PATTERN
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    isDeleted: {
        type: Boolean
    }
});

mongoose.model('Category', CategorySchema);
let Category = mongoose.model('Category');
module.exports = Category;