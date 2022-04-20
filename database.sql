CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"username" VARCHAR (100),
"password" VARCHAR (200),
"active" BOOLEAN DEFAULT TRUE,
"access_level" int,
"org_id" int,
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
"phone" bigint,
"website" VARCHAR (100),
"twitter" VARCHAR (100),
"facebook" VARCHAR (100),
"instagram" VARCHAR (100),
"description" VARCHAR (2000),
"image" VARCHAR (1000),
"address1" VARCHAR (150),
"address2" VARCHAR (150),
"city" VARCHAR (150),
"state" VARCHAR (125),
"zip" int
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

INSERT INTO "categories" (name)
VALUES 
('Community Council & District Meetings'),
('Education'),
('Park & City Cleanup'),
('Community Drives'),
('Community Events'),
('PopUps'),
('Philanthropy & Donations'),
('Other');


CREATE TABLE "events" (
"id" SERIAL PRIMARY KEY,
"org_id" int,
"category_id" int,
"status" VARCHAR (100) DEFAULT 'pending',
"name" VARCHAR (100),
"description" VARCHAR (300),
"link" VARCHAR (500),
"start_date" DATE,
"end_date" DATE,
"start_time" TIME,
"end_time" TIME,
"image" VARCHAR (1000),
"email" VARCHAR (50),
"phone" VARCHAR,
"address1" VARCHAR (1000),
"address2" VARCHAR (1000),
"city" VARCHAR (60),
"zip" int,
"state" VARCHAR (50),
"feedback" VARCHAR (300)
);




INSERT INTO organizations (name, email, phone, website, twitter, facebook, instagram, description, image, address1, address2, city, state, zip)
VALUES (
'Stronger Togther Now', 
'NPN@gmail.com', 
19094196950, 
'https://www.strongertogethernow.online/', 
'',
'https://www.facebook.com/strongertogethernowie', 
'https://www.instagram.com/strongertogethernow_ie/', 
'We are a 501(c)3 community outreach organization that aims to improve connectedness and provide resources for the people of the Inland Empire. 
Our main purpose is to enable, educate & empower.', 
'https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/173337219_102119665345852_7328138193215032229_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=rTMGf-JG-bIAX86vvQb&_nc_ht=scontent-msp1-1.xx&oh=00_AT-nbpQv2ILyteSDwHfn5yX9Ev6bspVzWqI1mxOWxDWlJw&oe=627E2C01', 
'1508 Barton Rd', 'PO Box 131', 'Redlands',  'California', '92373' ),

('Open Arms', 
'info@openarmsmn.org', 
'6128721152', 
'https://www.openarmsmn.org/', 'https://twitter.com/openarmsmn', 'https://www.facebook.com/openarmsmn', 'https://www.instagram.com/openarmsmn/', 
'People who are sick should not be without food. 
Yet, every day, our neighbors with life-threatening illnesses find themselves unable to shop or cook — and, often, without the support network to help.

That is where we come in. Open Arms of Minnesota is a nonprofit organization that prepares and delivers nourishing meals free of charge to critically ill Minnesotans and their families. 
Our registered dietitians and in-house chefs create delicious, medically tailored menus using fresh and organic ingredients whenever possible. 
Through the support of a loving community of donors and volunteers, we harvest, cook, and deliver nutritious, made-from-scratch meals directly to our clients.

At Open Arms, we believe that food is medicine, and there is always room for one more at our table.', 

'https://www.openarmsmn.org/wp-content/uploads/2020/09/oam-volunteers.png', 
'2500 Bloomington Ave', '', 'Minneapolis', 'MN', '55404' );