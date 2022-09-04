const express = require('express');
const adminRoutes = require('./routes/admin');
const shoproutes = require('./routes/shop');
const path = require('path');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/', shoproutes);

//404 error at any incorrect path
app.use(errorController.get404);

app.listen(port, () => console.log(`Server running on port http://127.0.0.1:${port}`))

