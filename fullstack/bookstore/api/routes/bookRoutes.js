import express from 'express'
import { Book } from '../models/bookmodel.js';

const router = express.Router();

// route to save books
router.post('/create', async(req, res)=>{
    try{
        if(!req.body.name || 
            !req.body.author ||
            !req.body.price
        ){
            return res.status(400).send({message: "Send all the required fileds"})
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
        };

        const book = await bookSchema.create(newBook)
        
        return res.status(201).send(book)

    }catch(err){
        console.log(err.message);
        res.status(500).send({message: err.message})
    }
})

// Get all books from DB
router.get('/all', async (req, res)=> {
    try{
        const books = await Book.find({})
        return res.status(200).json({
            count: books.length,
            data: books
        })
    }catch(err){
        console.log(err.message);
        res.status(500).send({message: err.message});
    }
})

// Get one 
router.get('/:id', async (req, res)=> {
    try{
        const book = await Book.findById(req.params.id);
        if(!book){
            res.status(404).send('Book not found');
        } 
        return res.status(200).json(book);
    }catch(err){
        console.log(err.message);
        res.status(500).send({message: err.message});
    }
})

// update specific
router.put('/:id', async (req, res)=>{
    try{
        if(!req.body.name || 
            !req.body.author ||
            !req.body.price
        ){
            return res.status(400).send({message: "Send all the required fileds"})
        }

        const result = await Book.findByIdAndUpdate(req.params.id, req.body)
        if(!result){
            return res.status(404).json({message: 'Book not found!'});
        }
        return res.status(200).send({message: "Book updated successfully!"})

    }catch(err){
        console.log(err.message);
        res.status(500).send({message: err.message})
    }
});

// Delete specific
router.delete('/:id', async (req,res)=>{
    try{
        const result = await Book.findByIdAndDelete(req.params.id, req.body)
        if(!result){
            return res.status(404).json({message: 'Book not found!'});
        }
        return res.status(200).send({message: "Book deleted successfully!"})

    }catch(err){
        console.log(err.message);
        res.status(500).send({message: err.message})
    }
})

export default router;