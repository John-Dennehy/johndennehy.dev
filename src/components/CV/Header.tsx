import React from "react";
import { StructuredText } from "react-datocms";
import { StructuredTextDocument } from "react-datocms";
import ContactDetailsComponent from "./ContactDetails";
import type { ContactDetails } from "@/lib/types";
import { cn } from "@/src/lib/utils";

type HeaderProps = {
  name: string;
  personalSummary: StructuredTextDocument;
  contactDetails: ContactDetails[];
};

export function Header({ contactDetails, name, personalSummary }: HeaderProps) {
  return (
    <HeaderWrapper>
      <ContactDetailsComponent data={contactDetails} />
      <div>
        <Title>{name}</Title>
        <Summary>
          <StructuredText data={personalSummary} />
        </Summary>
      </div>
    </HeaderWrapper>
  );
}

type WrapperProps = {
  children: React.ReactNode;
};

function HeaderWrapper({ children }: WrapperProps) {
  return (
    <>
      <div
        className={cn(
          "grid w-full grid-cols-1fr-2fr gap-4 p-4 ",
          "font-sans ",
          " text-neutral-700"
        )}
      >
        {children}
      </div>
    </>
  );
}

function Title({ children }: WrapperProps) {
  return (
    <h1
      className={cn(
        "mb-1 text-center align-top text-6xl font-light uppercase text-blue-600"
      )}
    >
      {children}
    </h1>
  );
}

function Summary({ children }: WrapperProps) {
  return (
    <div
      className={cn("px-6 pt-3 text-justify text-sm font-extralight leading-5")}
    >
      {children}
    </div>
  );
}
