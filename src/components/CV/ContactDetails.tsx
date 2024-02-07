import { ContactDetails, Wrapper } from "@/lib/types";
import Image from "next/image";
import { cn } from "@/lib/utils";
import WwwIcon from "../icons/WwwIcon";
import AtIcon from "../icons/AtIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import PhoneIcon from "../icons/PhoneIcon";
import GithubIcon from "../icons/GithubIcon";

type ContactDetailsProps = {
  data: ContactDetails[];
};

const ContactDetails = ({ data }: ContactDetailsProps) => {
  return (
    <ContactDetailsList>
      {data.map((contact) => (
        <ContactDetailsListItem
          key={contact.id}
          href={contact.href}
          icon={contact.icon}
          id={contact.id}
          label={contact.label}
          method={contact.method}
        />
      ))}
    </ContactDetailsList>
  );
};

function ContactDetailsList({ children }: Wrapper) {
  return <ul className={cn("flex flex-col gap-3 pt-1 ")}>{children}</ul>;
}

function ContactDetailsListItem({ href, label, method }: ContactDetails) {
  console.log(method);

  return (
    <li>
      <a href={href} className="flex flex-row items-center gap-4 text-blue-600">
        {method === "email" && <AtIcon />}
        {method === "web" && <WwwIcon />}
        {method === "linkedin" && <LinkedInIcon />}
        {method === "phone" && <PhoneIcon />}
        {method === "github" && <GithubIcon />}

        <p className="label text-sm font-extralight text-neutral-800">
          {label}
        </p>
      </a>
    </li>
  );
}

export default ContactDetails;
