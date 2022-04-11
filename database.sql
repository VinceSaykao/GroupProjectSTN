CREATE TABLE "users" (
"id" SERIAL PRIMARY KEY,
"username" VARCHAR (100),
"password" VARCHAR (200),
"active" BOOLEAN DEFAULT TRUE,
"access_level" int,
"first_name" VARCHAR (50),
"last_name" VARCHAR (50),
"bio" VARCHAR (500),
"email" VARCHAR (50),
"image" VARCHAR (1000)
);

CREATE TABLE "organizations" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR (50),
"email" VARCHAR (50),
"phone" int,
"website" VARCHAR (100),
"twitter" VARCHAR (100),
"facebook" VARCHAR (100),
"instagram" VARCHAR (100),
"description" VARCHAR (350),
"image" VARCHAR (1000),
"address1" VARCHAR (50),
"address2" VARCHAR (50),
"zip" int,
"state" VARCHAR (25)
);

CREATE TABLE "fav_events" (
"user_id" int,
"event_id" int
);

CREATE TABLE "categories" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR (50),
"description" VARCHAR (300),
"icon" VARCHAR (1000)
);

CREATE TABLE "events" (
"id" SERIAL PRIMARY KEY,
"org_id" int,
"category_id" int,
"status" VARCHAR (100),
"name" VARCHAR (100),
"description" VARCHAR (300),
"date" DATE,
"start_time" TIME,
"end_time" TIME,
"image" VARCHAR (1000),
"address1" VARCHAR (50),
"address2" VARCHAR (50),
"city" VARCHAR (60),
"zip" int,
"state" VARCHAR (50),
"feedback" VARCHAR (300)
);