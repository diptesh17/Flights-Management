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
  and then execute `npx sequelize db:migrate`

## DB Design

- Airplane Table
- Flight
- Airport
- City

- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but one airport belongs to a city
- One airport can have many flights, but a flight belongs to one airport

# Tables

## City : id, name, created_at, updated_at

## Tables : id, name, address, city_id, created_at, updated_at

    Relationship -> City has many airports & Airport belong to city ( one to many )
