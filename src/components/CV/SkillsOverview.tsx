import { getSkillIcon } from "@/lib/getSkillIcon";
import { byName } from "@/lib/sort";
import * as Types from "@/lib/types";
import { cn } from "@/lib/utils";
import Badge from "./Badge";

interface Props {
  data: Array<Types.Skill>;
}

const SkillsOverview = ({ data }: Props) => {
  return (
			<div
				className={
					"inline-flex  flex-wrap items-center gap-1  pt-2 tracking-tight"
				}
			>
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
