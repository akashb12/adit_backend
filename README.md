# adit_backend

steps to run backend

1. create .env file in root folder and add
   DB_NAME=adit_db<br />
   DB_USERNAME=youruser<br />
   DB_PASSWORD=yourpass<br />

2. connect to postgres <br />
   2.1 create user using command - CREATE USER youruser WITH ENCRYPTED PASSWORD 'yourpass';<br />
   2.2 create database using command - CREATE DATABASE adit_db;<br />
   2.3 grant privilages to user using command - GRANT ALL PRIVILEGES ON DATABASE adit_db TO youruser;<br />

3. once db is created run command to install all packages - npm install<br />
4. run migrations - npm run migrate<br />
5. run seed data - npm run run-seed<br />
6. to start the server use command - npm run dev<br />
7. there is script for rollback migration which can be used by running (run only when required)<br />
   7.1 to rollback all migrations npm run rollback<br />
   7.2 to rollback single migration npm run down <br />

technologies used<br />
nodejs <br />
typescript <br />
postgres <br />
knexjs <br />
