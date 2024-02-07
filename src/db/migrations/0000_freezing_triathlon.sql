CREATE TABLE `jd_companies` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` text,
	`description` text,
	`website_url` text,
	`address` text,
	`logo_src` text,
	CONSTRAINT `jd_companies_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `jd_roles` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`job_title` text,
	`description` text,
	`type` text,
	`is_legacy_role` boolean DEFAULT false,
	`start_date` date,
	`end_date` date,
	`is_current` boolean DEFAULT false,
	`company_id` int,
	CONSTRAINT `jd_roles_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `jd_skills` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` text,
	`description` text,
	`logo_src` text,
	CONSTRAINT `jd_skills_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `jd_skills_to_roles` (
	`role_id` int NOT NULL,
	`skill_id` int NOT NULL,
	CONSTRAINT `jd_skills_to_roles_role_id_skill_id_pk` PRIMARY KEY(`role_id`,`skill_id`)
);
