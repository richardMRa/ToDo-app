CREATE DATABASE todoapp;

CREATE TABLE IF NOT EXISTS todos (
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(40),
    progress INT,
    date VARCHAR(300)
);

CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);