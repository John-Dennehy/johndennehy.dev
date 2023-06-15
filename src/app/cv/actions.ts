"use server";

import db from "@/src/db";
import { NewSkill } from "@/src/db/queries/Skill";
import { skills } from "@/src/db/schema/cv";

export async function insertSkill(newSkill: NewSkill) {
  console.log("inserting skill");
  const response = await db.insert(skills).values(newSkill);
  console.log("inserted skill");
  return response;
}
