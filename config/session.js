require('dotenv').config({path:"/config/.env"});
var session = require('express-session');
const FileStore = require('session-file-store')(session);

module.exports = {
    secret:process.env.SECRET_VALUE,
    resave:false,
    saveUninitialized:true,
    store:new FileStore()
}

/**
 * secret: 보안을 위한 임의의 문자열(secret key)
 * resave: 세션 데이터가 바뀌기 전까지 세션저장소의 값을 저장할 지 여부(default: false)
 * saveUninitialized: 세션이 필요하기 전에 세션을 구동할지 여부(default: true)
 * store: 세션저장소를 지정
 */

// session 모듈이 환경 변수를 인식하지 못해서 하드 코딩함.
