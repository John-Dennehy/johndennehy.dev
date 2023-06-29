import Link from "next/link";
import { EmploymentPeriod } from "./EmploymentPeriod";
import ReactIcon from "../icons/skills/React";
import WorkIcon from "../icons/experience/WorkIcon";

type Company = {
  name: string;
  url: string;
  address: string;
  logoSrc: string;
};

type Tech = {
  name: string;
  iconSrc: string;
  docsUrl?: string;
};

export type Role = {
  title: string;
  company: Company;
  startDate: Date;
  endDate?: Date;
  currentRole?: boolean;
  tech: Tech[];
  description: string;
  type: "work" | "education" | "volunteer";
  nonDeveloperRole?: boolean;
};

type TechStackProps = {
  tech: Tech[];
};

function TechStack({ tech }: TechStackProps) {
  return (
    <div className="flex gap-2">
      {tech.map((tech) => {
        return (
          tech.name && (
            // <Chip key={tech.name}>
            <Link
              key={tech.name}
              href={tech.docsUrl ?? "#"}
              className="flex items-center gap-2 "
            >
              <ReactIcon />

              {tech.name}
            </Link>
            // </Chip>
          )
        );
      })}
    </div>
  );
}

type ChipProps = {
  children: React.ReactNode;
};
export function Chip({ children }: ChipProps) {
  return (
    <div className="bg-brandPrimary text-brandTextLight dark:bg-brandAccent dark:text-brandPrimary rounded-full px-4 py-1 py-2 text-sm">
      {children}
    </div>
  );
}

export default function RoleCard(props: Role) {
  return (
    <div className="card border-brandPrimaryLight border-2">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">{props.title}</h2>
          <h3 className="text-xl font-bold">{props.company.name}</h3>
        </div>
        <div className="flex justify-between">
          <EmploymentPeriod
            startDate={props.startDate}
            endDate={props.endDate}
          />
          <h4 className="text-lg font-bold">{props.company.address}</h4>
        </div>
        <div className="flex justify-between">
          <h4 className="text-lg font-bold">
            {props.type === "work" ? <WorkIcon /> : "not work"}
          </h4>

          <TechStack tech={props.tech} />
        </div>
        <p className="text-lg">{props.description}</p>
      </div>
    </div>
  );
}
