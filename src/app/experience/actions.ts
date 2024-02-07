"use server";

import { db } from "@/db";
import { NewSkill } from "@/db/queries/Skill";
import { skills } from "@/db/schema/";

export async function insertSkill(newSkill: NewSkill) {
	console.log("inserting skill");
	const response = await db.insert(skills).values(newSkill);
	console.log("inserted skill");
	return response;
}
