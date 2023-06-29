import { GraphQLClient, Variables } from "graphql-request";
import { StructuredTextDocument } from "react-datocms/structured-text";
import { ContactDetails, Skill, Company } from "./types";
import {} from "react-datocms";

interface RequestProps {
  query: string;
  variables?: Variables;
  preview?: boolean;
}

type Response = {
  cv: {
    name: string;
    personalSummary: StructuredTextDocument;
    contactDetails: ContactDetails[];
    skills: Skill[];
    experience: Company[];
  };
};

export function request({
  query,
  variables,
  preview,
}: RequestProps): Promise<Response> {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  });

  return client?.request(query, variables);
}
