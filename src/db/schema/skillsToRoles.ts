import { int, primaryKey } from "drizzle-orm/mysql-core";
import { prefixedMySqlTable } from "../prefixedMySqlTable";
import { type InferSelectModel, type InferInsertModel } from "drizzle-orm";

export const skillsToRoles = prefixedMySqlTable(
	"skills_to_roles",
	{
		roleId: int("role_id").notNull(),
		skillId: int("skill_id").notNull(),
	},
	(table) => {
		return {
			pk: primaryKey({ columns: [table.roleId, table.skillId] }),
		};
	},
);

export type SkillToRole = InferSelectModel<typeof skillsToRoles>;
export type NewSkillToRole = InferInsertModel<typeof skillsToRoles>;
