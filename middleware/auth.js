const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const auth = require("../middlware/auth");


function checkToken  (req, res, next) {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    if (token.startsWith('Bearer ')) {
        token = token.split(7, token.length);
    }
    if (token) {
        jwt.verify(token, 'secret', (err, decoded) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: "token not right"
                    });
                } else {

                    req.decoded = decoded;
                    next();
                }
            }
        )
    }}

module.exports = checkToken;

