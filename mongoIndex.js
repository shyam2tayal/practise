const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");


mongoose.connect("mongodb://127.0.0.1:27017/acmedb", {useNewUrlParser: true})
.then(() => {
    const app = express();
    app.use(express.json());
    app.use("/api", routes);

    app.listen('5000', () => {
        console.log("Server has started at port 5000");
    })
})