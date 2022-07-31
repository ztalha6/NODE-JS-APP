const express = require('express');
const adminRoutes = require('./routes/admin');
const shoproutes = require('./routes/shop');
const path = require('path');

const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/shop', shoproutes);

//404 error at any incorrect path
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'));
});

app.listen(port, () => console.log(`Server running on port http://127.0.0.1:${port}`))

