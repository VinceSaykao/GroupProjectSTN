CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"username" VARCHAR,
"password" VARCHAR,
"active" BOOLEAN DEFAULT TRUE,
"access_level" int,
"org_id" int,
"first_name" VARCHAR,
"last_name" VARCHAR,
"bio" VARCHAR,
"email" VARCHAR,
"image" VARCHAR
);

CREATE TABLE "organizations" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR,
"email" VARCHAR,
"phone" VARCHAR,
"website" VARCHAR,
"twitter" VARCHAR,
"facebook" VARCHAR,
"instagram" VARCHAR,
"description" VARCHAR,
"image" VARCHAR,
"address1" VARCHAR,
"address2" VARCHAR,
"city" VARCHAR,
"state" VARCHAR,
"zip" int
);

CREATE TABLE "fav_events" (
"user_id" int,
"event_id" int
);

CREATE TABLE "categories" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR,
);

CREATE TABLE "events" (
"id" SERIAL PRIMARY KEY,
"org_id" int,
"category_id" int,
"status" VARCHAR DEFAULT 'pending',
"name" VARCHAR,
"description" VARCHAR,
"link" VARCHAR,
"start_date" DATE,
"end_date" DATE,
"start_time" TIME,
"end_time" TIME,
"image" VARCHAR,
"email" VARCHAR,
"phone" VARCHAR,
"address1" VARCHAR,
"address2" VARCHAR,
"city" VARCHAR,
"zip" VARCHAR,
"state" VARCHAR,
"feedback" VARCHAR
);

------- INSERT: Categories -------

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


------- INSERT: Organizations -------

INSERT INTO organizations (name, email, phone, website, twitter, facebook, instagram, description, image, address1, address2, city, state, zip)
VALUES (
'Stronger Togther Now', 
'Strongertogethernowie@gmail.com', 
19094196950, 
'https://www.strongertogethernow.online/', 
'',
'https://www.facebook.com/strongertogethernowie', 
'https://www.instagram.com/strongertogethernow_ie/', 
'We are a 501(c)3 community outreach organization that aims to improve connectedness and provide resources for the people of the Inland Empire. 
Our main purpose is to enable, educate & empower.', 
'https://www.moneycrashers.com/wp-content/uploads/2013/03/volunteer-help-search-team-work-support.jpg', 
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


INSERT INTO organizations (name, email, phone, website, twitter, facebook, instagram, description, image, address1, address2, city, state, zip)
VALUES (
  'One Future Coachella Valley',
  'paul@onefuturecv.org',
  '7606250422',
  'https://www.onefuturecv.org/',
  'https://twitter.com/OneFutureCV',
  'https://www.facebook.com/OneFutureCV/',
  'https://www.instagram.com/onefuturecv/',
  'Today, OneFuture Coachella Valley, the valley’s three K-12 school districts, local colleges, nonprofits, cities and 
  business community, provide students with meaningful career explorations, work experience, and scholarships, as well 
  as other college success support. The key to this approach is involvement from our region’s employers, ensuring student 
  preparation is aligned with local workforce needs.Since 2009, OneFuture Coachella Valley and its nonprofit partners have 
  awarded more than $16 million in scholarships to 2,600 students from the Coachella Valley. With a diverse and experienced 
  leadership staff, and an energized board of directors, OneFuture Coachella Valley is poised to pursue a variety of new 
  opportunities across the region, working with new industries and expanding our scholarship program, as well as adopting 
  and aligning with national models on the cutting edge of innovative workforce development.',
  'https://www.onefuturecv.org/wp-content/themes/onefuturecv/img/onefuture-logo.png',
  '41550 Eclectic Street',
   'Suite 200 E',
   'Palm Desert',
   'CA',
   '92260'
);

INSERT INTO organizations (name, email, phone, website, twitter, facebook, instagram, description, image, address1, address2, city, state, zip)
VALUES (
  'Growing Inland Acheivement',
  'info@inlandempiregia.org',
  '9092560011',
  'https://inlandempiregia.org/',
  'https://twitter.com/GIA_Together',
  'https://www.facebook.com/GIATogether',
  'https://www.instagram.com/giatogether',
  'Growing Inland Achievement (GIA) is a regional, collective impact organization that works to achieve educational and 
  economic equity in the Inland Empire. GIA accomplishes this by serving as a collective impact (backbone) organization 
  that supports a cross-sector network of education, government, nonprofit, and business institutions in the Inland Empire 
  who are all collectively working towards a shared vision of educational and economic success. GIA researches issues and 
  opportunities, resources innovations and solutions, and connects diverse stakeholders across the two-county region of the 
  Inland Empire. GIA’s vision is that by 2035, San Bernardino and Riverside Counties will be widely recognized for their 
  educated workforce, thriving communities, and vibrant economy that creates prosperity for all. Everyone who lives, works, 
  studies, and conducts business in the Inland Empire plays a critical role in achieving GIA’s vision.',
  'https://inlandempiregia.org/wp-content/uploads/2021/04/GIA_Icon-PNG-300x300.png',
  '33562 Yucaipa Blvd 4-209',
  '',
  'Yucaipa',
  'CA',
  '92399'
);

INSERT INTO organizations (name, email, phone, website, twitter, facebook, instagram, description, image, address1, address2, city, state, zip)
VALUES (
  'TruEvolution',
  'info@truevolution.org',
  '9518881346',
  'truevolution.org',
  'https://twitter.com/truevolutioninc',
  'facebook.com/truevolutioninc',
  'https://www.instagram.com/truevolutioninc',
  'TruEvolution fights for health equity and racial justice to advance the quality of life and human dignity of LGBTQ+ people.',
  'https://inlandempiregia.org/wp-content/uploads/2020/04/GIA_Logo_OFFICIAL-05.png',
  '4164 Brockton Ave. Suite A',
  '',
  'Riverside',
  'CA',
  '92501'
);

------- INSERT: Events ---------

INSERT INTO "public"."events"("org_id","category_id","status","name","description","link","start_date","end_date","start_time","end_time","image","email","phone","address1","address2","city","zip","state","feedback")
VALUES
(1,4,E'approved',E'Food Prep Friday',E'From preparing medically tailored meals in our state-of-the-art kitchen to delivering our nourishing food to our critically ill clients, every aspect of our operations is made possible because of the incredible dedication of our volunteers.\n\nJoin us in making a profound difference for our neighbors living with life-threatening illnesses. Whether youre part of an organization or an individual wanting to make a difference, we have a wide variety of opportunities and will work with you to find the perfect fit for your skills, interests, and availability.',E'https://www.openarmsmn.org/volunteer/',E'2022-04-29',E'2022-04-29',E'06:00:00',E'12:00:00',E'https://www.openarmsmn.org/wp-content/uploads/2020/09/DSC_4878-2048x1356.jpg',E'volunteer@openarmsmn.org',6128721152,E'2500 Bloomington Ave',NULL,E'Minneapolis',55404,E'MN',NULL),
(2,1,E'approved',E'Food Prep Tuesday',E'From preparing medically tailored meals in our state-of-the-art kitchen to delivering our nourishing food to our critically ill clients, every aspect of our operations is made possible because of the incredible dedication of our volunteers.\n\nJoin us in making a profound difference for our neighbors living with life-threatening illnesses. Whether youre part of an organization or an individual wanting to make a difference, we have a wide variety of opportunities and will work with you to find the perfect fit for your skills, interests, and availability.',E'https://www.openarmsmn.org/volunteer/',E'2022-04-26',E'2022-04-26',E'06:00:00',E'12:00:00',E'https://www.openarmsmn.org/wp-content/uploads/2020/09/DSC_4878-2048x1356.jpg',E'volunteer@openarmsmn.org',6128721152,E'2500 Bloomington Ave',NULL,E'Minneapolis',55404,E'MN',NULL),
(3,4,E'pending',E'Food Prep Wednesday',E'From preparing medically tailored meals in our state-of-the-art kitchen to delivering our nourishing food to our critically ill clients, every aspect of our operations is made possible because of the incredible dedication of our volunteers.\n\nJoin us in making a profound difference for our neighbors living with life-threatening illnesses. Whether youre part of an organization or an individual wanting to make a difference, we have a wide variety of opportunities and will work with you to find the perfect fit for your skills, interests, and availability.',E'https://www.openarmsmn.org/volunteer/',E'2022-04-27',E'2022-04-29',E'06:00:00',E'12:00:00',E'https://www.openarmsmn.org/wp-content/uploads/2020/09/DSC_4878-2048x1356.jpg',E'volunteer@openarmsmn.org',6128721152,E'2500 Bloomington Ave',NULL,E'Minneapolis',55404,E'MN',NULL),
(4,4,E'pending',E'Food Prep Thursday',E'From preparing medically tailored meals in our state-of-the-art kitchen to delivering our nourishing food to our critically ill clients, every aspect of our operations is made possible because of the incredible dedication of our volunteers.\n\nJoin us in making a profound difference for our neighbors living with life-threatening illnesses. Whether youre part of an organization or an individual wanting to make a difference, we have a wide variety of opportunities and will work with you to find the perfect fit for your skills, interests, and availability.',E'https://www.openarmsmn.org/volunteer/',E'2022-04-28',E'2022-04-29',E'06:00:00',E'12:00:00',E'https://www.openarmsmn.org/wp-content/uploads/2020/09/DSC_4878-2048x1356.jpg',E'volunteer@openarmsmn.org',6128721152,E'2500 Bloomington Ave',NULL,E'Minneapolis',55404,E'MN',NULL),
(5,2,1,E'pending',E'City Council Meeting - Inland Empire',E'Come meet up!',E'www.realwebsite.com',E'2022-04-20',E'2022-04-20',E'19:19:00',E'21:19:00',E'',E'me@email.com',E'+1 (777) 555-7654',E'1 Main St.',E'',E'Los Angeles',12345,E'CA',NULL),
(1,2,E'approved',E'Youth United Mentorship Program',E'Mentorship is a key component of Youth United. Our Youth United Mentorship Program addresses three components: Community, Advocacy, and Professional Development.',E'https://www.truevolution.org/youth-united',E'2022-05-20',E'2022-05-20',E'12:00:00',E'12:00:00',E'https://i.imgur.com/Lp6UEM1.png',E'info@truevolution.com',E'+1 (951) 888-1346',E'4164 Brockton Ave',E'Ste A',E'Riverside',92501,E'CA',NULL),
(2,5,E'approved',E'Health Equity Advancement Lab (H.E.A.L.)',E'Mentorship is a key component of Youth United. Our Youth United Mentorship Program addresses three components: Community, Advocacy, and Professional Development.',E'https://www.truevolution.org/heal',E'2022-05-21',E'2022-05-21',E'12:00:00',E'12:00:00',E'https://i.imgur.com/FevWoHS.png',E'info@truevolution.com',E'+1 (951) 888-1346',E'4164 Brockton Ave',E'Ste A',E'Riverside',92501,E'CA',NULL),
(3,4,E'approved',E'Regional College Fair',E'College & Carrer Fair for the Coachella Valley',NULL,E'2022-11-06',E'2022-11-06',E'06:59:00',NULL,NULL,NULL,NULL,E'Agua Caliente Spa Resort Casino Rancho Mirage',E'32-250 Bob Hope Dr',E'Rancho Mirage',92270,E'CA',NULL);