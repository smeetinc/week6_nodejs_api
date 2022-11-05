const Flight = require("../models/Flight");


//get all flights
exports.getFlights = async (req, res) => {
    try {
        const flights = Flight;
        res.status(200).json({
            message: "All flights",
            flights: flights.exampleModel
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

//get single flight


//create new flights
exports.createFlights = async (req, res) => {
    try {
        const flight = await req.body;

        Flight.exampleModel.push(flight);       
        
        
        res.status(201).json({
            message: "Flight created",
            flight,
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}
exports.test = (req, res) => {
    console.log("TEST")
    res.send("Flight example Test")
}


