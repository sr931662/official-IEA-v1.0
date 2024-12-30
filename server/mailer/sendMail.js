const nodemailer = require("nodemailer")

const sendMail = async (req, res) => {

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


    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     host: 'smtp.gmail.com',
    //     auth: {
    //         user: "singhlko19998@gmail.com",
    //         pass: "$hivam$ingh931662"
    //     }
    // });
    // const info = await transporter.sendMail({
    //     from: {
    //         name: 'Indraprastha',
    //         address: 'indraprastha@gmail.com'
    //     },
    //     to: ["sr931662@gmail.com", "psinghlko1970@gmail.com"],
    //     subject: "Test successful",
    //     text: "Ready for dynamic email",
    //     html: "<h1>Now you can test for dynamic mailing</h1>"
    // });
    
    // try{
    //     await transporter.sendMail(info);
    //     console.log('Email has been sent!!');
    // } catch (err) {
    //     console.log(err);
    // }
};

module.exports = sendMail;