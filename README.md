# adit_backend

steps to run backend

1. create .env file in root folder and add
   DB_NAME=adit_db
   DB_USERNAME=youruser
   DB_PASSWORD=yourpass

2. connect to postgres
   2.1 create user using command - CREATE USER youruser WITH ENCRYPTED PASSWORD 'yourpass';
   2.2 create database using command - CREATE DATABASE adit_db;
   2.3 grant privilages to user using command - GRANT ALL PRIVILEGES ON DATABASE adit_db TO youruser;

3. once db is created run command to install all packages - npm install
4. run migrations - npm run migrate
5. run seed data - npm run run-seed
