# API DOCUMENTATION

```
BASE URL : localhost:5000

/users
	/register
		METHOD : POST
		REQEUST BODY
            {
                    "id":"tester1",
                    "password":"1234"
            }
		RESPONSE BODY
            > SUCCESS
                {
                    "id": "test34"
                }
            > FAIL
                {
                    "err": "user id already exist"
                }

	/login
		METHOD : POST
        REQEUST BODY
            {
                "id":"tester1",
                "password":"1234"
            }
        RESPONSE BODY
            > SUCCESS
                {
                    "msg": "Login Success",
                    "sid": "DK3CO8vuomGB5odyYEB3Cluj2vw6l53w",
                    "userId": "tester1"
                }
            > FAIL
                {
                    "msg": "Incorrect Information"
                }

	/logout
        METHOD : GET
        RESPONSE BODY
            > SUCCESS
                {
                    "msg": "Logout is success"
                }
            > FAIL
                {
                    "msg": "Not logined"
                }

/boads
    > CREATE
        METHOS : POST 
        REQEUST BODY
            {
                "title": "test2",
                "content": "hi",
                "writer": "wschoe"
            }
        RESPONSE BODY
            > SUCCESS
                {
                    "id": 3,
                    "title": "test2",
                    "content": "hi",
                    "writer": "wschoe",
                    "updatedAt": "2022-09-30T13:39:13.190Z",
                    "createdAt": "2022-09-30T13:39:13.190Z"
                }
            > FAIL
                ERROR MESSGE FROM NODE.JS
    
    > READ ALL
        METHOD : GET
        RESPONSE BODY
            [
                {
                    "id": 1,
                    "title": "update",
                    "content": "update",
                    "writer": "update",
                    "createdAt": "2022-09-30T13:33:25.000Z",
                    "updatedAt": "2022-09-30T13:39:21.000Z"
                },
                {
                    "id": 3,
                    "title": "test2",
                    "content": "hi",
                    "writer": "wschoe",
                    "createdAt": "2022-09-30T13:39:13.000Z",
                    "updatedAt": "2022-09-30T13:39:13.000Z"
                }
            ]

    > UPDATE
        METHOD : PUT
            REQEUST BODY
                {
                    "title": "update",
                    "content": "update",
                    "writer": "update"
                }
            RESPONSE BODY
                [ 
                    1 
                ]
    
    /:id
        > READ ONE
            RESPONSE BODY
                {
                    "id": 1,
                    "title": "update",
                    "content": "update",
                    "writer": "update",
                    "createdAt": "2022-09-30T13:33:25.000Z",
                    "updatedAt": "2022-09-30T13:39:21.000Z"
                }

        > DELETE 
            RESPONSE BODY
                {
                    "msg": "Post is deleted."
                }
```