import React from "react";
import type { Role } from "@/lib/types";
import { StructuredText } from "react-datocms";
import {
  renderRule,
  isParagraph,
  isListItem,
} from "datocms-structured-text-utils";

import { formatDate } from "@/lib/dateFormat";

export function RoleDetails({ startDate, summary, endDate, jobTitle }: Role) {
  return (
    <>
      <h2 className="flex flex-row place-content-between  text-lg">
        <span className="text-left">
          {`${formatDate(startDate)} to ${
            endDate ? formatDate(endDate) : "Present"
          } `}
        </span>
        <span className="text-right">{jobTitle}</span>
      </h2>
      {summary && (
        <div className="pb-3">
          <StructuredText
            data={summary}
            customNodeRules={[
              renderRule(
                isListItem,
                ({ node, adapter: { renderNode }, children, key }) => {
                  return renderNode("li", { key, className: "py-1" }, children);
                }
              ),
              renderRule(
                isParagraph,
                ({ node, adapter: { renderNode }, children, key }) => {
                  return renderNode(
                    "p",
                    {
                      key,
                      className: "text-xs leading-tight font-light  ",
                    },
                    children
                  );
                }
              ),
            ]}
          />
        </div>
      )}
    </>
  );
}
