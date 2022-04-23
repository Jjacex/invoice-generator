const express = require('express')
const router = express.Router()
const authUser = require('../middleware/authUser')
const csurf = require('csurf')
const csrfProtection = csurf({cookie: {httpOnly: true}})
const {
    invoicePage,
    addInvoice,
    getInvoice,
    getInvoiceTotal,
    generateInvoicePdf,
    deleteInvoice,
} = require('../controllers/invoiceController')

router.get('/', csrfProtection, authUser, invoicePage) //get invoice main page
router.get('/:invoice', csrfProtection, authUser, getInvoice) //load a single invoice
router.get('/getTotal/:invoice', getInvoiceTotal) //calculates the total of an invoice

router.post('/addInvoice', csrfProtection, authUser, addInvoice) //add a new invoice

router.get('/generateInvoicePdf/:invoice', authUser, generateInvoicePdf) //generates a printable pdf

router.delete('/deleteInvoice/:invoice', authUser, deleteInvoice)


module.exports = router