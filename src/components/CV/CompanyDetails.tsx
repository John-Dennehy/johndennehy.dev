import React from "react";
import type { Company, Wrapper } from "@/lib/types";
import Styles from "@/styles/CV.module.scss";
import { cn } from "@/lib/utils";
import { CompanySkills } from "./CompanySkills";
import { DividerVertical } from "./DividerVertical";
import { RoleDetails } from "./RoleDetails";

const CompanyDetails = ({
  companyName,
  address,
  skills,
  roles,
  customIcon,
}: Company) => {
  return (
    <CompanyWrapper>
      <LeftWrapper>
        <h3 className="text-lg">{companyName}</h3>
        <p className="text-xs italic">{address}</p>
        <CompanySkills skills={skills} />
      </LeftWrapper>
      <MiddleWrapper>
        <IconWrapper>{}</IconWrapper>
        <DividerVertical />
      </MiddleWrapper>
      <RightWrapper>
        {roles && (
          <div className="role">
            {roles.map((role) => {
              return (
                <RoleDetails
                  key={role.id}
                  jobTitle={role.jobTitle}
                  startDate={role.startDate}
                  endDate={role.endDate}
                  summary={role.summary}
                  id={role.id}
                />
              );
            })}
          </div>
        )}
      </RightWrapper>
    </CompanyWrapper>
  );
};

export default CompanyDetails;

function CompanyWrapper({ children }: Wrapper) {
  return (
    <div
      className={cn(
        Styles["company-container"],
        "grid grid-cols-[1fr_auto_2fr]  gap-4 p-0"
      )}
    >
      {children}
    </div>
  );
}

function LeftWrapper({ children }: Wrapper) {
  return <div className="col-span-1 flex flex-col gap-1  pt-2">{children}</div>;
}

function MiddleWrapper({ children }: Wrapper) {
  return (
    <div className="relative col-span-1 flex max-w-[2rem] flex-col items-center">
      {children}
    </div>
  );
}

function RightWrapper({ children }: Wrapper) {
  return <div className="col-span-1 flex flex-col gap-1  pt-2">{children}</div>;
}

function IconWrapper({ children }: Wrapper) {
  return (
    <div className={cn(" absolute top-4 h-2 w-2 rounded-full bg-blue-500")}>
      {children}
    </div>
  );
}
