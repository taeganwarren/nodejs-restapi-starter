const { Schema, model } = require('mongoose');

const item_schema = new Schema({
    text: {
        type: 'String',
        required: true,
        maxlength: 100
    }
});

const item = model('items', item_schema);
module.exports.Item = item;
