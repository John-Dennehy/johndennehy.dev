import Badge from "./Badge";
import { byName } from "@/lib/sort";
import * as Types from "@/lib/types";
import { cn } from "@/src/lib/utils";
import { getSkillIcon } from "@/src/lib/getSkillIcon";

interface Props {
  data: Array<Types.Skill>;
}

const SkillsOverview = ({ data }: Props) => {
  return (
    <div className={cn("inline-flex  flex-wrap items-center gap-2  pt-2 ")}>
      {data.sort(byName).map((skill: Types.Skill) => (
        <Badge key={skill.id} showcase={skill.showcase}>
          <>
            {getSkillIcon(skill.name)}
            {skill.name}
          </>
        </Badge>
      ))}
    </div>
  );
};

export default SkillsOverview;
