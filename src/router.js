const express = require('express');
const router = express.Router();
router.get('/', (req, res)=>{
    res.send('hello, viewer')
})
router.get('/about', (req, res)=>{
    res.send('another text about us');
})
module.exports = router;