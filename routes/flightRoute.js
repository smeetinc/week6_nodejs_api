const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example);
router.get('/flight', controller.getFlights);
router.post('/flight', controller.createFlights);

module.exports = router;

