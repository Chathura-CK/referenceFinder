// controllers/referenceController.js
const Reference = require('../models/refNos');

exports.createReference = async (req, res) => {
    try {
        const { referenceNumber, routeNumber } = req.body;
        const newReference = new Reference({ referenceNumber, routeNumber });
        await newReference.save();
        res.status(201).json(newReference);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.findReferenceByRouteNumber = async (req, res) => {
    try {
        const { routeNumber } = req.params;
        const reference = await Reference.findOne({ routeNumber });
        if (!reference) {
            return res.status(404).json({ message: 'Reference not found' });
        }
        res.status(200).json(reference);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};