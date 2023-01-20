const express = require('express')
const router = express.Router()


router.get('/:categoriaId/producto/:productoId', (req, res) => {
    const {categoriaId, productoId} = req.params;
    
    res.json({
        categoriaId,
        productoId
    })
})

module.exports = router;