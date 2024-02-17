const express = require('express');
const router = express.Router();
const bookControllers = require('../controllers/booksControllers');



router.get('/', bookControllers.getAllBooks) // get all books
router.post('/',bookControllers.addBook)
router.get('/:id',bookControllers.getBookById)
router.put('/:id', bookControllers.updateBook)
router.delete('/:id', bookControllers.deleteBook)


module.exports = router;