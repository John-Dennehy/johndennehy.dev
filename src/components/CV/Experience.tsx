import CompanyDetails from "./CompanyDetails";
import * as Types from "@/lib/types";
import { cn } from "@/lib/utils";

const Experience = ({ companies }: Types.Experience) => {
  return (
    <ExperienceWrapper>
      {companies.map((company) => {
        return (
          <CompanyDetails
            id={company.id}
            key={company.id}
            companyName={company.companyName}
            address={company.address}
            roles={company.roles}
            skills={company.skills}
            customIcon={company.customIcon}
          />
        );
      })}
    </ExperienceWrapper>
  );
};

export default Experience;

function ExperienceWrapper({ children }: { children: React.ReactNode }) {
  return <div className={cn("text-gray-700")}>{children}</div>;
}
