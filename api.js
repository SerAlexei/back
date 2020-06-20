const express = require('express');
const router = express.Router();
const Artist = require('./artist.js');

router.get('/artist', (req, res)=>{
    Artist.find(req.body)
        .then(artist => {
            res.send(artist);
        });
});
router.post('/artist', (req, res)=>{
    Artist.create(req.body)
        .then(artist => {
            res.send(artist);
        });
});
router.put('/artist/:id', (req, res)=>{
    Artist.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            Artist.findOne({_id: req.params.id})
                .then(artist => {
                    res.send(artist);
                });
        });
});
router.delete('/artist/:id', (req, res)=>{
    Artist.deleteOne({_id: req.params.id})
        .then(artist => {
            res.send(artist);
        });
});

module.exports = router;