const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const environements = require('./environments');
const userRoutes = require('./routes/user-routes');
const authRoutes = require('./routes/auth-routes');
const studentRoutes = require('./routes/student-routes');
const app = express();

require('./startup/config')();
require('./startup/db')();
require('./startup/validation')();


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes.routes);
app.use('/api', authRoutes.routes);
app.use('/api', studentRoutes.routes);

app.listen(environements.port, () => console.log('App listening on url: http://localhost:' + environements.port));