const fs = require('fs');

const userRegister = (req, res, err) => {
    // # Parse request body
    let id = req.body.id;
    let password = req.body.password;
    
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
        } 
    }
    
    // Register new user
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

    // Responsd
    return res.send({
        "id":id
    });
}

const userLogin = (req,res,err) => {

}

module.exports = {
    userRegister
};