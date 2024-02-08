import { db } from "@/db";
import { NewSkill, skills } from "@/db/schema/skills";

export const insertSkill = async (skill: NewSkill) => {
	return db.insert(skills).values(skill);
};
