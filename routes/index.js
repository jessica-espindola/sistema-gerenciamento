const express = require('express');
const router = express.Router();

// Import other route files
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const systemRoutes = require('./systemRoutes'); // Importa as rotas dos sistemas

// Use route files
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/systems', systemRoutes); // Adiciona as rotas dos sistemas

module.exports = router;