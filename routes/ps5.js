const express = require('express');
const router = express.Router();
const config = require('../config/fx');
const fetch = require("node-fetch");

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');

const asyncSet = promisify(client.set).bind(client);
const asyncGet = promisify(client.get).bind(client);
const asyncExists = promisify(client.exists).bind(client);
const asyncExpire = promisify(client.expire).bind(client);

client.flushdb((err, response) => {
    if (err) {throw new Error('error')}
})

router.route('/')
    .get((req, res, next) => {
        res.render('ps5', {});
    })
    .post( async (req, res, next) => {
        let zipcode = req.body.zipcode;
        //check cache, using value as key
        let match = await asyncExists(zipcode);
        //if in cache, return
        if (match) {
            let desc = await asyncGet(zipcode);
            let response = {
                zipcode: req.body.zipcode,
                desc: desc,
                cached: true
            }
            res.json(response);
        }
        else {
            postData(req.body.zipcode).then(
                async postData => {
                    let status = await asyncSet(zipcode, postData.wx_desc);
                    status = await asyncExpire(zipcode, 15);
                    let response = {
                        zipcode: zipcode,
                        desc: postData.wx_desc,
                        cached: false
                    }
                    res.json(response);

                }
            )
                .catch(error => {
                    console.log('error: ' + error.message);
                })
                .finally(_ => {
                    console.log('Done');
                })
        }
    })

async function postData(zipcode = '', data = {}) {
    const weatherKey = config.APP_KEY;
    const weatherID = config.APP_ID;
    const response = await fetch('http://api.weatherunlocked.com/api/current/us.' + zipcode + '?app_id=' + weatherID + '&app_key=' + weatherKey);
    const responsejson = await response.json();
    return responsejson;
}

module.exports = router;