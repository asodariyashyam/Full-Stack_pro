const express = require("express");
const cors = require("cors")
const app = express(); // Corrected: declare app using const
const port = 8080;
app.use(express.json());
app.use(cors())

const productRoutes = require("./Routes/routes.product");

// const { connection } = require("./db/db.connection");


const mongoose =require('mongoose')

mongoose.connect('mongodb+srv://asodariyashyam555:7Gy4HOdaqydt22QM@cluster0.609d2sg.mongodb.net/fullStackPro',{
    useNewUrlParser : true

})
.then((res)=>{
    console.log("connected to the database")
})
.catch((err)=>{
    console.log(err)
})


app.use("/routes", productRoutes)



app.listen(port, async () => {
    try {
    } catch (err) {
        console.log(err)
    }
    console.log("Server is running at port", port);
});
