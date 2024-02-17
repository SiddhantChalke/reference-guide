
import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({

    name : {
        type : String,
        require : true,
    },
    author : {
        type : String,
        require : true,
    },
    // description : {
    //     type : String,
    //     require : true,
    // },
    price : {
        type : Number,
        require : true,
    },
    available : {
        type : Boolean,
        
    },
    // image : {
    //     type : String,
    //     require : true,
    // }
})


export const Book = mongoose.model('books', bookSchema)