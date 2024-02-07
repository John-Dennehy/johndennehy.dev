import { serial, text } from "drizzle-orm/mysql-core";
import { prefixedMySqlTable } from "../prefixedMySqlTable";
import { type InferSelectModel, type InferInsertModel } from "drizzle-orm";

export const companies = prefixedMySqlTable("companies", {
	id: serial("id").primaryKey(),
	name: text("name"),
	description: text("description"),
	websiteUrl: text("website_url"),
	address: text("address"),
	logoSrc: text("logo_src"),
});

export type Company = InferSelectModel<typeof companies>;
export type NewCompany = InferInsertModel<typeof companies>;

