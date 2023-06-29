import React, { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/src/lib/utils";

const SKILL_ICON_URL = "/img/heroicons-solid_code.svg";
const EXPERIENCE_ICON_URL = "/img/fa-solid_globe-europe.svg";

type SkillsSection = {
  type: "skills";
  label: string;
  iconSrc?: typeof SKILL_ICON_URL;
  children?: ReactNode;
};

type ExperienceSection = {
  type: "experience";
  label: string;
  iconSrc?: typeof EXPERIENCE_ICON_URL;
  children?: ReactNode;
};

type SectionProps = SkillsSection | ExperienceSection;

const SectionContainer = ({ type, label, iconSrc, children }: SectionProps) => {
  if (type === "skills") iconSrc = SKILL_ICON_URL;
  if (type === "experience") iconSrc = EXPERIENCE_ICON_URL;

  return (
    <section
      id={type}
      className={cn(
        // Styles["section-container"],
        "flex flex-col p-1 text-blue-600"
      )}
    >
      <SectionTitleWrapper>
        {/* {iconSrc && (
          <Image
            className="icon"
            src={iconSrc}
            height={28}
            width={28}
            alt={type}
          />
        )} */}
        <SectionTitle> {label} </SectionTitle>
      </SectionTitleWrapper>

      {children}
    </section>
  );
};

export default SectionContainer;

function SectionTitleWrapper({ children }: { children: ReactNode }) {
  return <div className={cn("flex gap-2 pb-1 align-middle")}>{children}</div>;
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className={cn("text-2xl font-medium ")}>{children}</h2>;
}
