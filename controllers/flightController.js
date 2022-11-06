const Flights = require("../models/Flight");
const {v4: uuid} = require("uuid");

//get all flights
exports.getFlights = async (req, res) => {
    try {
        const flights = Flights;
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
        let id = req.params.id;
      
        const neewFlight = Flights.exampleModel.find((neewFlight) => neewFlight.id === id);
        res.status(200).json({
            message: "Flight found",
            neewFlight : neewFlight,
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
        

        Flights.exampleModel.push(newFlight);       
        
        
        res.status(201).json({
            message: "Flight created",
            newFlight,
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

//update flight data

exports.updateFlight = async (req, res) => {
    try{
        let id = req.params.id;
        const flight = Flights.exampleModel.find((flight) => flight.id ===id);
        const {title, time, price, date} = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;
        res.status(200).json({
            message: "Flight updated",
            flight: flight,
    });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

exports.deleteFlight = async(req, res) => {
    try{
        let id = req.params.id;
        const flight = Flights.exampleModel.find((flight) => flight.id === id);
        Flights.exampleModel.splice(Flights.exampleModel.indexOf(flight), 1);

        res.send(`Flight record with id number ${id} deleted`);
    } catch (err){
        res.status(500).json({message: err.message});
    }

};

exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}
exports.test = (req, res) => {
    console.log("TEST")
    res.send("Flight example Test")
}


