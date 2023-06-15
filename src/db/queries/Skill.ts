import { InferModel } from "drizzle-orm";
import db from "..";
import { skills } from "../schema/cv";

export type Skill = InferModel<typeof skills, "select">;
export type NewSkill = InferModel<typeof skills, "insert">;
export const insertSkill = async (skill: NewSkill) => {
  return db.insert(skills).values(skill);
};
