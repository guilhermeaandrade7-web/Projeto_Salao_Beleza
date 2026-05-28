const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/login', (req, res) => {

    const token = jwt.sign(
        { id: 1 },
        'segredo',
        { expiresIn: '1h' }
    );

    res.json({
        token
    });
});

module.exports = router;