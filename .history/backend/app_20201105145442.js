const express = require('express');
const path = require('path');

const body_parser = require('body-parser');
const app = express();
const signup = require('./routes/signupRoute');
const cors = require('cors')



app.set('view engine' , 'ejs');
app.set('views','views');
app.use(body_parser.json());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use(signup);

app.listen(9000);


