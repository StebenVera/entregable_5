const  express = require('express');
const hbs = require('hbs');
const product = require('./routes/product');
const app = express();
const PORT = 8000;

//middlewares
app.use(express.urlencoded({extended: true}))

// routes
app.use('/products',product);



// errors
app.use((req, res, next) => {
    res.status(404).render('404');
})

hbs.registerPartials(__dirname + '/views/partials', function(err){});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

const server = app.listen(PORT, () => {
    console.log(`Server running on Port ${server.address().port}`)
});
