const express = require('express')
const router = express.Router()
const {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook 
} = require('../controllers/BookController')

//route untuk menampilkan data
router.get('/', getBooks)

//route untuk mengirim data
router.post('/', addBook)

router.get('/:id', getBook)

// router.get('/:id', (req, res) => {

// })

//route untuk memperbaharui/update data
// router.put('/:id', (req, res) => {
//     res.write('PUT book code')
//     res.end()
// })
router.put('/:id', updateBook)


//route untuk menghapus data
// router.delete('/:id', (req, res) => {
//     res.write('DELETE book code')
//     res.end()
// })
router.delete('/:id', deleteBook)

module.exports = router