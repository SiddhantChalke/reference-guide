const Book = require('../models/Books');


// get all books


const getAllBooks = async (req, res) => {

    let books;

    try{

        books = await Book.find();

    }catch(error){

        console.log(error)
    }


    if(!books){

        return res.status(404).json({message : "Books not found"})
    }
    else{

        return res.status(200).json({books})

    }
}




// get book by id 

const getBookById = async (req, res ) => {

    const _id = req.params.id;
    let book;

    try{

        book = await Book.findById({_id})


    }catch(error){

        console.log(error)

    }

    if(!book){

        return res.status(404).json({message : "book not found..."})

    }else{

        return res.status(200).json({book})

    }

}





// add book

const addBook = async (req, res) => {


    const {name , author , description, price, available , image } = req.body;
    let book;

    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        })

        await book.save();


    }catch(e){
        console.log(e)
    }

    if(!book){

        return res.status(404).json({message : "Unable to add book"});
    }
    else{

        return res.status(201).json({book});
    }

}


// update book

const updateBook = async (req, res) => {
    const { name ,author , description ,price , available , image } = req.body;

    const _id = req.params.id;

    let book;

    try{

        book = await  Book.findByIdAndUpdate(_id , {

            name,
            author,
            description,
            price,
            available,
            image
        })

        book = await book.save()

    }catch(error){

        console.log(error)

    }

    if(!book){

        return res.status(404).json({message : "book not found"});
    }
    else{
        return res.status(201).json({message : "book udpated succesfully"});

    }

}


// delete


const deleteBook = async (req, res) => {

    const _id = req.params.id;
    let book;

    try{

        book = await Book.findByIdAndDelete({_id})

    }catch(error){

        console.log(error)
    }

    if(!book){

        res.status(404).json({message : "book not found"})

    }else{

        res.status(200).json({message : "book deleted"})
    }
}



exports.getAllBooks = getAllBooks;
exports.getBookById = getBookById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
exports.addBook = addBook;