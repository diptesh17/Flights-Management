# Welcome to Flights Service

# Project Setup

- Clone the project on your local
- Execute `npm install` on the same path
- Create `.env` in the root directry , and all following configurations -`PORT = 3000`
- Inside `src/config` folder create a new file `config.json` and add following piece of json

```
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_PASSWORD>",
    "database": "<YOUR_DB_NAME>",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


```

- Once you've added the above json , go to src folder from terminal and execute `npx sequelize db:create`
