"use client";

import React from "react";
import { StructuredTextDocument } from "react-datocms";
import SectionContainer from "./SectionContainer";
import SkillsOverview from "./SkillsOverview";
import Experience from "./Experience";
import Styles from "@/styles/CV.module.scss";
import type { Company, Skill, ContactDetails } from "@/lib/types";
import { Header } from "./Header";
import { cn } from "@/src/lib/utils";
import { AnimatedContainer } from "./AnimatedContainer";

interface CVProps {
  name: string;
  personalSummary: StructuredTextDocument;
  contactDetails: ContactDetails[];
  skills: Skill[];
  experience: Company[];
}

const CV = ({
  name,
  personalSummary,
  contactDetails,
  skills,
  experience,
}: CVProps) => {
  return (
    <CVWrapper>
      <Header
        name={name}
        personalSummary={personalSummary}
        contactDetails={contactDetails}
      />
      <div className="mb-4 h-[1px] w-full bg-blue-200" />
      <SectionsWrapper>
        <SectionContainer type="skills" label="Technical Skills">
          <SkillsOverview data={skills} />
        </SectionContainer>

        <SectionContainer type="experience" label="Experience">
          <Experience companies={experience} />
        </SectionContainer>
      </SectionsWrapper>
      <footer className={Styles.footer} />
    </CVWrapper>
  );
};

export default CV;

function CVWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AnimatedContainer>
      <ShadowWrapper>
        <div
          className={cn(
            "m-0 h-[297mm] max-h-[999999px] w-[210mm] bg-white p-0"
          )}
        >
          {children}
        </div>
      </ShadowWrapper>
    </AnimatedContainer>
  );
}

function ShadowWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="drop-shadow-2xl print:drop-shadow-none">{children}</div>
  );
}

function SectionsWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        // Styles[ "content" ],
        "flex flex-col gap-6 px-4 "
      )}
    >
      {children}
    </div>
  );
}
