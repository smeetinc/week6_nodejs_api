const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example);
router.get('/flight', controller.getFlights);
router.get('/flight/:id', controller.getFlight);
router.post('/flight', controller.createFlights);
router.put('/flight/:id', controller.updateFlight);
router.delete('/flight/:id', controller.deleteFlight);

module.exports = router;

