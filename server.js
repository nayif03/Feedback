const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const router = express.Router();


// connect to DB
dotenv.config();
mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
    console.log("connected to DB")
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)

const Message = require("./model/Message");

app.post("/", async (req, res) => {
    const pass = req.body.pass
    const text = req.body.message
    const date = Date.now()

    if (pass !== "ksb" || !text) {
        res.send("fill the blanks please")
    }

    const message = new Message({
        text: req.body.message,
        date: date
    })
    try {
        const sendMessage = await message.save()
        res.send('<h2 style="margin:10% auto; text-align: center" >your message has been sent! Dankeschön 🙏 </h2>')
        console.log("created")
    } catch (err) {
        console.log(err)
        res.status(400).send("something went wrong")
    }


});


app.listen("3000", () => console.log("app is listnenig on 5000"))
