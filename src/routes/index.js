const express = require('express');
const router = express.Router();

//routes
router.get('/', (req, res) => {
    res.render('index.html', { title: 'Un titulo de mierda' });
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Un contacto de mierda' });
});

router.get('/course', (req, res) => {
    res.render('course.html', { title: 'Un contacto de mierda' });
});
module.exports = router;