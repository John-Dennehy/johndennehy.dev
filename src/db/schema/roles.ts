import { boolean, date, int, serial, text } from "drizzle-orm/mysql-core";
import { prefixedMySqlTable } from "../prefixedMySqlTable";
import { relations } from "drizzle-orm";
import { companies } from "./companies";
import { skills } from "./skills";
import { type InferSelectModel, type InferInsertModel } from "drizzle-orm";

export const roles = prefixedMySqlTable("roles", {
	id: serial("id").primaryKey(),
	jobTitle: text("job_title"),
	description: text("description"),
	type: text("type"),
	isLegacyRole: boolean("is_legacy_role").default(false),
	startDate: date("start_date"),
	endDate: date("end_date"),
	isCurrent: boolean("is_current").default(false),
	companyId: int("company_id"),
});
export const roleRelations = relations(roles, ({ one, many }) => ({
	companyId: one(companies, {
		fields: [roles.companyId],
		references: [companies.id],
	}),
	skills: many(skills),
}));

export type Role = InferSelectModel<typeof roles>;
export type NewRole = InferInsertModel<typeof roles>;
