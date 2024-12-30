const http = require("http")
const nodemailer = require("nodemailer")

const server = http.createServer((req, res) =>{
    const transporter = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        port: 465,
        auth: {
            user: "singhlko19998@gmail.com",
            pass: "rwnremhpftqbvihm"
        }
    })
    const receiver = {
        from: "singhlko19998@gmail.com",
        to: "sr931662@gmail.com",
        subject: "Node js mail testing",
        text: "Hello this is a test email!!"
    }

    transporter.sendMail(receiver, (error, emailResponse) => {
        if(error)
        throw error;
        console.log("Success!");
        res.end();
    })
})

server.listen(8080)