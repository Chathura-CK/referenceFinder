// routes/referenceRoutes.js
const express = require('express');
const referenceController = require('../controllers/refNosController');

const router = express.Router();

router.post('/references', referenceController.createReference);
router.get('/references/:routeNumber', referenceController.findReferenceByRouteNumber);

module.exports = router;