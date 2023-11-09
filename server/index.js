const { port } = require('./config.js')
const express = require('express');
const app = express();
const router = require('./router.js')
const cors = require('cors')

const PORT = port;

// TODO: increase cors security with client param
app.use(cors());

app.use(express.json());
app.use(router);

app.listen(3000, console.log(`server is running on port ${PORT}`));