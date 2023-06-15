import { InferModel, relations } from "drizzle-orm";
import {
  pgTableCreator,
  date,
  serial,
  text,
  boolean,
  primaryKey,
  integer,
} from "drizzle-orm/pg-core";

const tableSchema = pgTableCreator((name) => `cv_${name}`);

export const companies = tableSchema("companies", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  websiteUrl: text("website_url"),
  address: text("address"),
  logoSrc: text("logo_src"),
});

export type Company = InferModel<typeof companies, "select">;
export type NewCompany = InferModel<typeof companies, "insert">;

export const skills = tableSchema("skills", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  logoSrc: text("logo_src"),
});

export const roles = tableSchema("roles", {
  id: serial("id").primaryKey(),
  jobTitle: text("job_title"),
  description: text("description"),
  type: text("type"),
  isLegacyRole: boolean("is_legacy_role").default(false),
  startDate: date("start_date"),
  endDate: date("end_date"),
  isCurrent: boolean("is_current").default(false),
  companyId: integer("company_id"),
});

export type Role = InferModel<typeof roles, "select">;
export type NewRole = InferModel<typeof roles, "insert">;

export const roleRelations = relations(roles, ({ one, many }) => ({
  companyId: one(companies, {
    fields: [roles.companyId],
    references: [companies.id],
  }),
  skills: many(skills),
}));

export const skillsToRoles = tableSchema(
  "skills_to_roles",
  {
    roleId: integer("role_id").notNull(),
    skillId: integer("skill_id").notNull(),
  },
  ({ roleId, skillId }) => ({
    pk: primaryKey(roleId, skillId),
  })
);

export type SkillToRole = InferModel<typeof skillsToRoles, "select">;
export type NewSkillToRole = InferModel<typeof skillsToRoles, "insert">;
