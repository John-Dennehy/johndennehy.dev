import { serial, text } from "drizzle-orm/mysql-core";
import { prefixedMySqlTable } from "../prefixedMySqlTable";
import { type InferSelectModel, type InferInsertModel } from "drizzle-orm";

import { skillsToRoles } from "./skillsToRoles";

export const skills = prefixedMySqlTable("skills", {
	id: serial("id").primaryKey(),
	name: text("name"),
	description: text("description"),
	logoSrc: text("logo_src"),
});

export type Skill = InferSelectModel<typeof skills>;
export type NewSkill = InferInsertModel<typeof skills>;
