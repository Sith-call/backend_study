# mysql docker command

docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=<password> -d -p 3306:3306 mysql:latest

docker start mysql-container

docker exec -it mysql-container bash

mysql -u root -p

# mysql orm command for Board

npx sequelize model:generate --name Boards --attributes title:string,content:string,writer:string

npx sequelize-cli db:migrate

# referrence

## mysql docker 
https://poiemaweb.com/docker-mysql

## express sequelize
https://velog.io/@ktaewon98/Node-Mysql-ORM%EC%9C%BC%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0

https://victorydntmd.tistory.com/27

https://fomaios.tistory.com/entry/Nodejs-Sequelize%EB%A1%9C-CRUD-%EA%B5%AC%ED%98%84%ED%95%B4-%EB%B3%B4%EA%B8%B0-feat-MySQL
