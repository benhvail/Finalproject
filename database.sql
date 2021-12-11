 CREATE TABLE "Worker Info" (
	"Name"	char(255) NOT NULL,
	"Address"	char(255),
	"WorkID"	INTEGER NOT NULL UNIQUE,
	"HomePhone"	INTEGER UNIQUE,
	"Office"	char(255) NOT NULL
 );
 
CREATE TABLE "Worker ID Info" (
	"WorkID"	INTEGER NOT NULL UNIQUE,
	"Payroll"	INTEGER NOT NULL,
	"Office"	char(255) NOT NULL
);

CREATE TABLE "Office Info" (
	"Office"	char(255) NOT NULL,
	"Floor"	INTEGER,
	"Sector"	INTEGER
);

INSERT INTO "Worker Info" VALUES ("John Doe", "123 Street St", 001, 7161001000, "1A");
INSERT INTO "Worker Info" VALUES ("Jane Doe", "124 Street St", 002, 7161001001, "2A");
INSERT INTO "Worker Info" VALUES ("Frank Hank", "125 Street St", 003, 7161001002, "3A");
INSERT INTO "Worker Info" VALUES ("Jill Stephen", "126 Street St", 004, 7161001003, "2B");

INSERT INTO "Worker ID Info" VALUES (001, 100000, "1A");
INSERT INTO "Worker ID Info" VALUES (002, 150000, "2A");
INSERT INTO "Worker ID Info" VALUES (003, 60000, "3A");
INSERT INTO "Worker ID Info" VALUES (004, 90000, "2B");

INSERT INTO "Office Info" VALUES ("1A", 1, "A");
INSERT INTO "Office Info" VALUES ("2A", 2, "A");
INSERT INTO "Office Info" VALUES ("3A", 3, "A");
INSERT INTO "Office Info" VALUES ("2B", 2, "B");
