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
"phone" VARCHAR,
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
   'https://uploads-ssl.webflow.com/5f19bcec9b6683a6b7e50801/61f35732266dc270dcd31dab_TruEvolution-Logo-White-Slogan-p-500.png',
  '4164 Brockton Ave. Suite A',
  '',
  'Riverside',
  'CA',
  '92501'
);