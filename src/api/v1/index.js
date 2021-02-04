const { Router } = require('express');
const { create_item, read_item, update_item, delete_item } = require('./controllers/items');

const router = Router();

router.post('/items', create_item);
router.get('/items/:id', read_item);
router.put('/items/:id', update_item);
router.delete('/items/:id', delete_item);

module.exports.api_router = router;
