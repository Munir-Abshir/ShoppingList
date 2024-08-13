-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

Create table "Shopping" (
"id" serial primary key,
"name" VARCHAR LIMIT 80,
"quanity" NUMERIC,
"unit" VARCHAR LIMIT 20
);

insert into "Shopping"
("name", "quanity", "unit")
VALUES
('apple', '5', 'lbs');

