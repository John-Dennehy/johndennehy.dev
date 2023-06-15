CREATE TABLE IF NOT EXISTS "cv_companies" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"website_url" text,
	"address" text,
	"logo_src" text
);

CREATE TABLE IF NOT EXISTS "cv_roles" (
	"id" serial PRIMARY KEY NOT NULL,
	"job_title" text,
	"description" text,
	"type" text,
	"is_legacy_role" boolean DEFAULT false,
	"start_date" date,
	"end_date" date,
	"is_current" boolean DEFAULT false,
	"company_id" integer
);

CREATE TABLE IF NOT EXISTS "cv_skills" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"logo_src" text
);

CREATE TABLE IF NOT EXISTS "cv_skills_to_roles" (
	"role_id" integer NOT NULL,
	"skill_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "cv_skills_to_roles" ADD CONSTRAINT "cv_skills_to_roles_role_id_skill_id" PRIMARY KEY("role_id","skill_id");
