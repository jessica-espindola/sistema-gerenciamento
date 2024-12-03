// routes/systemRoutes.js
const express = require('express');
const router = express.Router();

// Define system routes
router.get('/', (req, res) => {
    res.send('Get all systems');
});

router.post('/', (req, res) => {
    res.send('Create a new system');
});

router.get('/:id', (req, res) => {
    res.send(`Get system with ID ${req.params.id}`);
});

router.put('/:id', (req, res) => {
    res.send(`Update system with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`Delete system with ID ${req.params.id}`);
});

module.exports = router;