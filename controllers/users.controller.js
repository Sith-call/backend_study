const fs = require('fs');
const cookieConfig = require('./../config/cookie');

const userRegister = (req, res, err) => {
    // # Parse request body
    let id = req.body.id;
    let password = req.body.password;

    // # Check data validity
    if(!(((typeof id) == "string") && ((typeof password) == "string"))){
        return res.send({
            "msg":"Data is invalid"
        })
    }
    
    // # Load Database
    // 1. Use fs module to read binary json file and encode it.
    let rawdata = fs.readFileSync('./model/db.json',{encoding:'utf8',flag:'r'});
    // 2. make binary json file JSON Type.
    let data = JSON.parse(rawdata);
    // 3. Parsing JSON DB file.
    let count = data['count'];
    let users = data['users'];

    // # Check ID availability
    for (idx = 1; idx <= count; idx++){
        if(users[idx].id == id) {
            // 1. If user are already exist, then response error message
            return res.send({
                "err":"user id already exist"
            })
            // # Troubleshooting
            /** 
             * You shoud use return code like this if there is if-else code. 
             * Otherwise express server try to return every res code whenever it face res code.
             * So, there is risk of facing [ERR_HTTP_HEADERS_SENT] error.
             */
        } 
    }
    
    // # Register new user
    count++;
    let newUser = {
        "id":id,
        "password":password
    };
    users[count] = newUser;
    let newData = {
        "count":count,
        "users":users
    }
    fs.writeFileSync('./model/db.json',JSON.stringify(newData));

    // # Responsd
    return res.send({
        "id":id
    });
}

const userLogin = (req,res,err) => {
    // # Parse request body
    let id = req.body.id;
    let password = req.body.password;

    // # Load Database
    let rawdata = fs.readFileSync('./model/db.json',{encoding:'utf8',flag:'r'});
    let data = JSON.parse(rawdata);
    let count = data['count'];
    let users = data['users'];

    // # Check user id and password
    for (idx = 1; idx <= count; idx++){
        if(users[idx].id == id) {
            if(users[idx].password == password){
                // 1. Make cookie and session for user
                // # Comment
                /**
                 * There is no need to use cookie for login.
                 * Because express-session module alread processed cookie for session id.
                 * So The only thing you should do is just code req.session.<sth>
                 */
                req.session.userId = id;
                return res.send({
                    "msg":"Login Success",
                    "sid":req.session.id,
                    "userId":req.session.userId
                })
            }
        }
    }
    return res.send({
        "msg":"Incorrect Information"
    })
}

const userLogout = (req,res,err) => {
    if(req.session.userId){
        console.log(req.session.id+' is logout');
        req.session.destroy(function(err){
            if(err) throw err;
        });
        res.send({
            "msg":"Logout is success"
        });
    }
    else{
        res.send({
            "msg":"Not logined"
        })
    }
}

module.exports = {
    userRegister,
    userLogin,
    userLogout
};