const Flight = require("../models/Flight");
const {v4: uuid} = require("uuid");

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

exports.getFlight = async (req, res) => {
    try{
        let id = req.param.id;
        const flight = Flights.find((flight) => flight.id === id);
        res.status(200).json({
            message: "Flight found",
            flight,
        });
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};


//create new flights
exports.createFlights = async (req, res) => {
    try {
        const {title, time, price, date} = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            time,
            price,
            date,
        }
        

        Flight.exampleModel.push(newFlight);       
        
        
        res.status(201).json({
            message: "Flight created",
            newFlight,
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

//update flight data

exports

exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}
exports.test = (req, res) => {
    console.log("TEST")
    res.send("Flight example Test")
}


