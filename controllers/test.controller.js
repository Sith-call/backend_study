const cookieConfig = require('./../config/cookie');

const cookieTest = (req,res,err) => {
    if(req.body.data == "make") {
        res.cookie('key','value',cookieConfig);
        res.send("make cookie");
    }
    if(req.body.data == "check"){
        console.log(req.cookies);
        res.send(req.cookies);
    }
}

const sessionTest = (req,res,err) => {
    if(req.session.id) {
        const msg = req.session.id+" is logined."
        console.log(msg);
        return res.send({
            "msg":msg
        })
    } else {
        return res.send({
            "mse":"There is no session."
        })
    }
}

module.exports = {
    cookieTest,
    sessionTest
};