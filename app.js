const express = require('express');
const adminData = require('./routes/admin');
const shoproutes = require('./routes/shop');
const path = require('path');

const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use('/', shoproutes);

//404 error at any incorrect path
app.use((req, res) => {
    res.status(404).render('not-found');
});

app.listen(port, () => console.log(`Server running on port http://127.0.0.1:${port}`))

