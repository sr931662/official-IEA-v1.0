const http = require("http");
const nodemailer = require("nodemailer");

const server = http.createServer((request, response) => {
    const auth = nodemailer.createTransport({
        service: "gmail",
        secure : true,
        port : 465,
        auth: {
            user: "indra.eng.arch@gmail.com",
            pass: "qsecaidkbdcmxrf"

        }
    });

    const receiver = {
        from : "indra.eng.arch@gmail.com",
        to : "sr931662@gmail.com",
        subject : "Node Js Mail Testing!",
        text : "Hello this is a text mail!"
    };

    auth.sendMail(receiver, (error, emailResponse) => {
        if(error)
        throw error;
        console.log("success!");
        response.end();
    });
    
});

server.listen(8080);


// const http = require("http");
// const nodemailer = require("nodemailer");

// const server = http.createServer((req, res) => {
//     const auth = nodemailer.createTransport({
//         service: "gmail",
//         secure: true,
//         port: 465,
//         auth: {
//             user: "indra.eng.arch@gmail.com",
//             pass: "qsecaidkbdcmxrf"
//         }
//     });

//     const receiver = {
//         from: "indra.eng.arch@gmail.com",
//         to: "sr931662@gmail.com",
//         subject: "Node Js Mail Testing",
//         text: "Hello this is a sample test mail body!!!"
//     };
    
//     auth.sendMail(receiver, (error, emailResponse) => {
//         if (error)
//         throw error;
//         console.log("success!!");
//         res.end();
//     });
// });

// server.listen(8080);

// // console.log("hello terminal");