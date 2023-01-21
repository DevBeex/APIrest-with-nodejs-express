const express = require('express');
const routerApi = require('./routes/index')
const cors = require('cors')

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/errorHandler')

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.com']
const options = {
    origin: (origin, callback) => {
        if(whitelist.includes(whitelist)) {
            callback(null, true);
        } else {
            callback(new Error('No permitido'))
        }
    }
}
app.use(cors(options))

app.get('/', (req, res) => {
    res.send('hola mi server en express');

});

routerApi(app)

/* El orden de poner los middlewares afecta al resultado final */
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
    console.log('My port ' + port)
})
