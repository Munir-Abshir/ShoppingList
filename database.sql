-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

Create table "Shopping" (
"id" serial primary key,
"name" VARCHAR(80) NOT NULL,
"quanity" NUMERIC NOT NULL ,
"unit" VARCHAR(20),
"purchase" BOOlEAN DEFAULT FALSE
);

insert into "Shopping"
("name", "quanity", "unit")
VALUES
('apple', '5', 'lbs');

