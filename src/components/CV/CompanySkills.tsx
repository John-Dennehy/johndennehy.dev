import { Skill } from "@/lib/types";
import { byName } from "@/lib/sort";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { getSkillIcon } from "@/lib/getSkillIcon";

export type CompanySkillsProps = {
  skills: Skill[] | undefined;
};

export function CompanySkills({ skills }: CompanySkillsProps) {
  return (
    <>
      {skills && (
        <div
          className={cn(
            "flex flex-wrap gap-x-1 gap-y-2 pb-8 pt-2 text-base text-neutral-400"
          )}
        >
          {skills.sort(byName).map((skill) => {
            if (skill.url)
              return (
                <Link
                  href={skill.url}
                  className="hover:text-neutral-500"
                  key={skill.id}
                >
                  {getSkillIcon(skill.name)}
                </Link>
              );

            return <div key={skill.id}>{getSkillIcon(skill.name)}</div>;
          })}
        </div>
      )}
    </>
  );
}
