const express = require('express');
const app = express();
const routes = require('./MealRoutes');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

mongoose.set("strictQuery", false);

const PORT = 4000 || process.env.port; 

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_LINK)
.then(()=>{
    console.log('we are connected to MongoDB')
})
.catch((err)=>console.log(err))

app.use(routes);
app.listen(PORT, ()=>{
    console.log(`port ${ PORT } works`);
})
//bondanna93  5QZ25LvOaIhaLdUj