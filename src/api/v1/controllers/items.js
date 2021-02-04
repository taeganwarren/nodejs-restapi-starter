const { Item } = require('../models/item');

module.exports.create_item = async (req, res) => {
    try {
        const new_item = new Item(req.body);
        const inserted_item = await new_item.save();
        res.status(201).send(inserted_item);
    } catch (e) {
        console.log(e);
        res.status(500).send('There was an error creating the item. Please try again later.');
    }
}

module.exports.read_item = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await Item.find({ _id: id });
        res.status(200).send(item[0]);
    } catch (e) {
        console.log(e);
        res.status(500).send('There was an error reading the item. Please try again later.');
    }
}

module.exports.update_item = async (req, res) => {
    try {
        const id = req.params.id;
        await Item.findByIdAndUpdate(id, { text: req.body.text }, { useFindAndModify: false, new: true });
        res.status(204).send();
    } catch (e) {
        console.log(e);
        res.status(500).send('There was an error updating the item. Please try again later.');
    }
}

module.exports.delete_item = async (req, res) => {
    try {
        const id = req.params.id;
        await Item.findByIdAndDelete({ _id: id });
        res.status(204).send();
    } catch (e) {
        console.log(e);
        res.status(500).send('There was an error deleting the item. Please try again later.');
    }
}
