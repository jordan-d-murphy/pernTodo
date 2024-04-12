CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

SELECT * FROM todo;

INSERT INTO todo(description) VALUES ('hello');