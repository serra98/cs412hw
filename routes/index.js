const express = require('express');
const router = express.Router();
const db = require('../mongoCx');

router.route('/a').get(async (req, res, next) => {
  let mongo = await db.getDB('CS412')
  let results = await mongo.collection('weather').insert(req.body)
  res.send(results);
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Serra Jung  CS412 PS4 ' });
});



module.exports = router;
