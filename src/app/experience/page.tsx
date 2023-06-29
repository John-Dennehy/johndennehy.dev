import db from "@/src/db";
import { NewSkill } from "@/src/db/queries/Skill";
import { companies, skills } from "@/src/db/schema/cv";
import InsertNewSkill from "./InsertNewSkill";
import { Badge } from "@/src/components/ui/badge";

export const metadata = {
  title: "John Dennehy - CV",
  description: "CV for John Dennehy",
};

// export const runtime = 'edge'
// export const dynamic = "force-dynamic"

export default async function ExperiencePage() {
  const allSkills = await db.select().from(skills);
  const allCompanies = await db.select().from(companies);
  console.log(allSkills);

  return (
    <div className="grid gap-2">
      <Card>
        <CardTitle>Skills</CardTitle>
        <ul>
          {allSkills &&
            allSkills?.map((skill) => (
              <li key={skill.id}>
                <Badge variant="outline">{skill.name}</Badge>
              </li>
            ))}
        </ul>
      </Card>
      <Card>
        <CardTitle>Companies</CardTitle>
        <ul>
          {allCompanies &&
            allCompanies?.map((company) => (
              <li key={company.id}>{company.name}</li>
            ))}
        </ul>
      </Card>
    </div>
  );
}

type CardProps = {
  children: React.ReactNode;
};
const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
      {children}
    </div>
  );
};

type CardTitleProps = {
  children: React.ReactNode;
};
const CardTitle = ({ children }: CardTitleProps) => {
  return (
    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
      {children}
    </h2>
  );
};
