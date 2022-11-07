
const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 3000;                  //Save the port number where your server will be listening

const { Client, CheckoutAPI } = require('@adyen/api-library');

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});

const client = new Client({apiKey: 'AQElhmfuXNWTK0Qc+iSEs0MZpOeUXYVZ2pVkaj7wJQ7hZyt9wpG3xRDBXVsNvuR83LVYjEgiTGAH-o99Xhl7yfCJxjEzndiUfr/4wrMjmdW09u7kI4YJZB8A=-M==Pk^(5y6?}28+%', environment: 'TEST'});


 
const checkout = new CheckoutAPI(client);
 


checkout.sessions({
    amount: { currency: "EUR", value: 1000 },
    reference: "YOUR_PAYMENT_REFERENCE",
    returnUrl: "https://your-company.com/checkout?shopperOrder=12xy..",
    merchantAccount: 'TAGAccountECOM',
    countryCode: "NL"
})
    .then((response) => {
        console.log(response);
    })
    .catch((e) => {
        console.log(e);
    });


