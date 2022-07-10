const jwt = require("jsonwebtoken");
const config = require('config');
function auth(req, res, next){ 
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send({'error':"Access Denied",'data':''});
    try{
        var decoded = jwt.verify(token,config.get('jwtPrivateKey'));
        req.user = decoded;
        next();
    }catch(e){
        return res.status(400).send({'error':"Invalid Token", "data":""});
    }
}

module.exports = auth;