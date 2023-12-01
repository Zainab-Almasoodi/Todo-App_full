CREATE DATABASE authtodolist;
--set extention -- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
--users
CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);


--todo table
CREATE TABLE todos (
  todo_id SERIAL,
  user_id UUID,
  description VARCHAR(255) NOT NULL,
  PRIMARY KEY (todo_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

--insurt fake user
--INSERT INTO users (user_name, user_email, user_password) VALUES ('zainab', 'zainab213@gmail.com', 'kthl8822');
--INSERT INTO todos (user_id, description) VALUES ('d2d04f3c-1dee-4c0a-928a-61e1476373d2', 'Hello');

-- select * from users INNER JOIN todos ON users.user_id = todos.user_id;
-- select * from users LEFT JOIN todos ON users.user_id = todos.user_id;