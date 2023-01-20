const express = require('express');
const routerApi = require('./routes/index')

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hola mi server en express');

});

routerApi(app)

app.listen(port, () => {
    console.log('Mi port ' + port)
})


// app.get('/categories/:categoriaId/producto/:productoId', (req, res) => {
//     const {categoriaId, productoId} = req.params;
    
//     res.json({
//         categoriaId,
//         productoId
//     })
// })
