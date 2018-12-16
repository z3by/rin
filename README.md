![The RIN](https://static1.squarespace.com/static/5b280d6a620b85faae73af1a/t/5b2d794970a6adb5d8314799/1544654520989/?format=1500w)

# THE RIN WEBSITE

## Refugee Invesment Network website

#### proving that refugees are investables

#Installation

- fork the repository

- clone your own instance to your local disk

- install node.js and npm latest version globlally

- navigate to the project directory

- run this commands to install node dependencies

```
    npm install
```

### the project uses environment variables you should define

```
    RDS_HOSTNAME=********
    RDS_USERNAME=********
    RDS_PASSWORD=********
    RDS_PORT=****
    AWS_ACCESS_KEY_ID=***********
    AWS_SECRET_ACCESS_KEY=***********
    RDS_DATABASE=***********
    S3_BUCKET_NAME=***********
    HASH_SECRET=***********
```

### open config file in /config/config.js and change development settings to your local settings

```
development: {
    username: "*****",
    password: "********",
    database: "******",
    host: "********",
    dialect: "********"
}
```

it will install the server dependencies and the client dependencies

### you will need to provide the google map api key
   - navigate to
```
    /client/src/config
```
   - rename the file map.config.1.js to map.config.js
   and put the map api key inside it
   
   
- to serve the static react app run this command

```
    npm run dev
```

- to run the node server run this command

```
    npm start
```

- to run the nodemon development that watches for changes run this command

```
    npm run watch
```
