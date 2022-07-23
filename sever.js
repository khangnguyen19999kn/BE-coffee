const express = require('express');
const path = require('path');
const { sequelize } = require('./models/index')
const { rootRouter } = require('./routers/index');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser')
const port = 9696

app.use(cors());
app.use(express.json());
const publicPathDir = path.join(__dirname, './public');
app.use("/public",express.static(publicPathDir))

//use router
app.use('/api/v1', rootRouter);
app.use(cookieParser())

app.listen(port, async () => {
  console.log(`App listening on port http://localhost:9696`)
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})
