/*
This is the middleware for checking constantly the login user's token, to verify the user.
It is used for protecting sensitive routes.
 */

const jwt = require("jsonwebtoken");


module.exports = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1]; //accessing the token from headers
        console.log(token);
        const decoded = jwt.verify(token, "secret");
        req.userData = decoded;
        next();

    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }

}